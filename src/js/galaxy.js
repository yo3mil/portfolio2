
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'


export const init = () => {
    /**
     * Base
     */
    // Debug
    const gui = new dat.GUI({
        width:400,
        closed: true
    })

    // Canvas
    const canvas = document.querySelector('canvas.webgl__galaxy')

    // Scene
    const scene = new THREE.Scene()



    /**
     * Galaxy
     */
    const parameters = {
        count: 250000,
        size: 0.03,
        radius: 5,
        branches: 4,
        spin: 1,
        randomness: .7,
        randomnessPower: 3,
        insideColour: '#ff6030',
        outsideColour: '#1b3984',
        texture: 1
    }

    /**
     * Textures
     */
    const textureLoader = new THREE.TextureLoader()


    let geometry = null
    let material = null
    let points = null

    const generateGalaxy = () => {

        //const particleTexture = textureLoader.load(`http://www.emilwojcik.com/img/textures/${parameters.texture}.png`)
        const particleTexture = textureLoader.load(`/img/textures/${parameters.texture}.png`)
        


        // destroy old galaxy
        if (points !== null) {
            geometry.dispose()
            material.dispose()
            scene.remove(points)
        }

        geometry = new THREE.BufferGeometry()

        const positions = new Float32Array(parameters.count * 3)
        const colours = new Float32Array(parameters.count * 3)

        const colourInside = new THREE.Color(parameters.insideColour)
        const colourOutside = new THREE.Color(parameters.outsideColour)

        for(let i = 0; i < parameters.count; i++){
            const i3 = i * 3

            //Positions of paticles
            const radius = Math.random() * parameters.radius
            const spinAngle = radius * parameters.spin
            const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2
            //cool stuff here, interation by number of branches inside an array

            const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
            const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
            const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius

            positions[i3    ] = Math.cos(branchAngle + spinAngle) * radius + randomX
            positions[i3 + 1] = randomY
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ


            //Colour of particles
            const mixedColour = colourInside.clone()
            mixedColour.lerp(colourOutside, radius / parameters.radius)
            colours[i3    ] = mixedColour.r
            colours[i3 + 1] = mixedColour.g
            colours[i3 + 2] = mixedColour.b
        }

        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        )
        geometry.setAttribute(
            'color',
            new THREE.BufferAttribute(colours, 3)
        )

        //material

        material = new THREE.PointsMaterial({
            size: parameters.size,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
            alphaMap: particleTexture,
            transparent: true,
        })

        // points

        points = new THREE.Points(geometry, material)
        scene.add(points)
    }

    generateGalaxy()

    gui.add(parameters, 'count').min(100).max(10000000).step(100)
    .onFinishChange(generateGalaxy)
    gui.add(parameters, 'size').min(0.001).max(0.1).step(0.001)
    .onFinishChange(generateGalaxy)
    gui.add(parameters, 'radius').min(0.01).max(20).step(0.01)
    .onFinishChange(generateGalaxy)
    gui.add(parameters, 'branches').min(2).max(20).step(1)
    .onFinishChange(generateGalaxy)

    gui.add(parameters, 'spin').min(- 5).max(5).step(0.001)
    .onFinishChange(generateGalaxy)
    gui.add(parameters, 'randomness').min(0).max(5).step(0.01)
    .onFinishChange(generateGalaxy)
    gui.add(parameters, 'randomnessPower').min(1).max(10).step(0.001)
    .onFinishChange(generateGalaxy)

    gui.addColor(parameters, 'insideColour')
    .onFinishChange(generateGalaxy)
    gui.addColor(parameters, 'outsideColour')
    .onFinishChange(generateGalaxy)

    gui.add(parameters, 'texture').min(1).max(13).step(1)
    .onFinishChange(generateGalaxy)
    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 3
    camera.position.y = 3
    camera.position.z = 3
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
    const clock = new THREE.Clock()

    const tick = () =>
    {
        const elapsedTime = clock.getElapsedTime()

        points.rotation.y = elapsedTime * 0.01
        // Update controls
        controls.update()

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()

}