// import { Main } from "./Home.style";
// import { Title } from "./Home.style";
// import { Footer } from "./Home.style";
// import { Img } from "./Home.style";

// import { Link } from "react-router-dom";

// import FeaturesHomeCard from "../../components/FeaturesHome/FeaturesHomeCard";

// function Home() {
//   return (
//     <Main>
//       <br />
//       <br />
//       <br />
//       <br />

      
//       <Title> - SOLÉ BROTHERS TECNOLOGY - </Title>

//       <Link
//         style={{
//           textDecoration: "none",
//           display: "flex",
//           justifyContent: "space-around",
//         }} to="/shop"
//       >
//         <FeaturesHomeCard title="SEO" />
//         <FeaturesHomeCard title="ADS" />
//         <FeaturesHomeCard title="WEB" />
//       </Link>

//       <Footer>
//         <Img src="/C.png" />
//         <Img src="/HtmlYCss.png" />
//         <Img src="/JS.jpg" />
//         <Img src="/php.jpg" />
//         <Img src="/react.png" />
//       </Footer>
//     </Main>
//   );
// }

// export default Home;

import  { useRef, useEffect } from "react";
import * as THREE from "three";
import {
  PageContainer,
  ThreeBackground,
  Overlay,
  HeaderBar,
  Brand,
  HeroSection,
  HeroText,
  PrimaryCTA,
  Features,
  FeatureCard,
} from "./Home.style";

type SceneObject = {
  mesh: THREE.Mesh;
  speed: number;
  rotSpeed: number;
};

export default function Home() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(width, height);
    // <- he eliminado cualquier uso de outputEncoding/sRGBEncoding por compatibilidad de tipos
    currentMount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f1720, 0.06);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 12);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const point = new THREE.PointLight(0xffb86b, 1.2, 50);
    point.position.set(-10, 10, 10);
    scene.add(point);

    const group = new THREE.Group();
    scene.add(group);

    const shapeCount = 28;
    const objects: SceneObject[] = [];

    for (let i = 0; i < shapeCount; i++) {
      const isTorus = Math.random() > 0.5;
      const geometry = isTorus
        ? new THREE.TorusKnotGeometry(0.5 + Math.random() * 0.7, 0.18, 128, 16)
        : new THREE.IcosahedronGeometry(0.6 + Math.random() * 0.7, 0);

      const hue = 200 + Math.random() * 60;
      const saturation = 70 + Math.random() * 20;
      const lightness = 45 + Math.random() * 10;
      const color = new THREE.Color(`hsl(${hue}, ${saturation}%, ${lightness}%)`);

      const material = new THREE.MeshStandardMaterial({
        color,
        metalness: 0.4,
        roughness: 0.35,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      const scale = 0.6 + Math.random() * 1.6;
      mesh.scale.set(scale, scale, scale);

      group.add(mesh);
      objects.push({
        mesh,
        speed: 0.002 + Math.random() * 0.01,
        rotSpeed: 0.001 + Math.random() * 0.009,
      });
    }

    let t = 0;
    let frameId: number;

    const animate = () => {
      t += 0.005;
      group.rotation.y = Math.sin(t * 0.3) * 0.15;
      group.position.y = Math.sin(t * 0.6) * 0.4;

      for (let i = 0; i < objects.length; i++) {
        const o = objects[i];
        o.mesh.rotation.x += o.rotSpeed;
        o.mesh.rotation.y += o.rotSpeed * 0.7;
        o.mesh.position.x += Math.sin(t + i) * 0.0006 * (i % 5);
      }

      camera.position.x = Math.sin(t * 0.2) * 1.2;
      camera.position.y = Math.sin(t * 0.14) * 0.6;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);

      // uso currentMount (no mountRef.current) para que TS sepa que no es null
      if (currentMount && renderer.domElement.parentElement === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }

      renderer.dispose();

      group.traverse((child) => {
        const meshChild = child as THREE.Mesh;
        if (meshChild.isMesh) {
          if (meshChild.geometry) meshChild.geometry.dispose();
          if (meshChild.material) {
            if (Array.isArray(meshChild.material)) {
              meshChild.material.forEach((m) => m.dispose());
            } else {
              meshChild.material.dispose();
            }
          }
        }
      });
    };
  }, []);

  return (
    <PageContainer>
      <ThreeBackground ref={mountRef} />

      <Overlay>
        <HeaderBar>
          <Brand>StudioMaravilla</Brand>
        </HeaderBar>

        <HeroSection>
          <HeroText>
            <h1>Diseñamos webs que convierten</h1>
            <p>
              Landing pages rápidas, tiendas optimizadas y experiencias atractivas — sin complicaciones.
            </p>
            <PrimaryCTA to="/Shop">Ir a la tienda</PrimaryCTA>
          </HeroText>

          <Features>
            <FeatureCard>
              <h3>Diseño moderno</h3>
              <p>Interfaces limpias y adaptadas a tu marca.</p>
            </FeatureCard>

            <FeatureCard>
              <h3>Rendimiento</h3>
              <p>Carga ultrarrápida y SEO friendly.</p>
            </FeatureCard>

            <FeatureCard>
              <h3>Soporte</h3>
              <p>Mantenimiento y mejoras continuas.</p>
            </FeatureCard>
          </Features>
        </HeroSection>
      </Overlay>
    </PageContainer>
  );
}

