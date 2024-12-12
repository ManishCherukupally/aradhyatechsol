import React, { useEffect, useState } from 'react';
import { Navbar, ScrollArea, Text,Image, Center, Button, Transition, rem, Affix } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';
import './NavbarStyled.css';
import Image1 from '../assets/2567a4b1eaffb87d962919467a2202ec.jpg'
import { useWindowScroll } from '@mantine/hooks';
import { FaArrowUp } from 'react-icons/fa6';
import Footer1 from '../Footer/Footer1';
import CustomHeader from '../Header/CustomHeader';

const Services1 = () => {
    const [scroll, scrollTo] = useWindowScroll();
    const { tab } = useParams();
    const [active, setActive] = useState(tab || 'Embedded Design'); 


  
  const navLinks = [
    { label: 'Embedded Design', content: 
      <div style={{justifyContent:'center',alignContent:'center'}}>
        <ScrollArea h={700}>
          
      <Center>
        <Text fz={22}  >Embedded Design Services (EDS) encompass a wide array of hardware design solutions, tailored to meet diverse needs—from compact, power-efficient designs to robust, high-performance systems using advanced embedded processors and DSPs. At ATS, our expertise spans the entire development cycle, including schematic creation, bill of materials optimization, PCB layout and design, prototyping, production assistance, and FPGA design. These services are customized to address unique client requirements, ensuring precision and efficiency in every project.</Text>

      </Center>
      <Center mt='5rem'>
         <Image src={Image1} width='70vh'> </Image>
     </Center>
       <div style={{marginTop:'2rem'}}>
      <Text fz={22} fw='bold' >Our Expertise </Text>
      <Text fz={22}>
<ul>
<li>
<b>Low Power Solutions :</b> Specializing in efficient architecture design and physical implementation for minimal power consumption. </li>
  <li><b>High-Performance Systems :</b> Expertise in advanced pipeline design and high-speed I/Os.</li>
  <li><b>Multiple Clock Domains :</b> Proficiency in handling complex clocking requirements across designs.</li>
  <li><b>High-Speed Interfaces :</b> Skilled in implementing SERDES (10G serial, XAUI, PCIe), PCI-Express, USB 2.0/3.0, and Thunderbolt technologies.</li>  
  <li> <b>Memory Sub-Systems :</b> Development of high-performance memory solutions, including DDR2/DDR3 memory controllers and Flash controllers.</li>
  <li><b>Processor Architectures :</b> Experience with major CPU, GPU, and DSP architectures, including multi-core ARM and custom designs.</li>
  <li> <b>FPGA Solutions :</b> Comprehensive FPGA design, simulation, and FPGA-to-ASIC conversions.</li>
  <li><b>Lens Control PCBs :</b> Designing, fabricating, assembling, and testing control PCBs that regulate zoom speed and focus for long-range night vision IR cameras.</li>
</ul>
<b>Lens Control Unit Solutions</b> <br />
ATS specializes in green circuit board designs for lens control units, enabling precise control of zoom and focus functionalities in high-performance infrared cameras. These solutions are rigorously developed, prototyped, and tested to ensure optimal performance in challenging environments.</Text>

</div>
</ScrollArea>


      </div>
      },
      
    { label: 'Reverse Engineering', content: 
      <div style={{justifyContent:'center',alignContent:'center'}}>
        <ScrollArea h={700}>
          
      <Text fz={25} fw='bold' >Reverse Engineering: PCB Prototyping, Testing, and Retrofitting</Text>
        <Text fz={22}  >At ATS, we specialize in the reverse engineering of printed circuit boards (PCBs) to help customers overcome challenges such as obsolete components or unavailability of design data. By analyzing a sample board, including its components, we recreate all necessary data, enabling duplication or upgrades. Our expertise extends to reverse engineering PCBs with programmed integrated circuits, custom parts, and obsolete technologies, ensuring compatibility with modern requirements.</Text>

      
      <Center mt='5rem'>
         <Image src='https://www.venture-mfg.com/wp-content/uploads/2018/12/Figure-18-PCB-Assembly.jpg' width='70vh'> </Image>
     </Center>
       <div style={{marginTop:'2rem'}}>
      <Text fz={25} fw='bold' >Step-by-Step Process of PCB Reverse Engineering </Text>
      <Text fz={22}>
<ol type='1'>
<li>
<b>Schematic Development :</b> The process begins by creating a circuit diagram from the sample PCB. This schematic serves as the foundation for developing a comprehensive bill of materials (BOM) that outlines all components used in the design. </li>
  <li><b>Original Design Analysis :</b>The original PCB design is scrutinized to identify potential issues, such as miscalculations or inefficiencies. We also collaborate with customers to understand any recurring failures or limitations they’ve experienced.</li>
  <li><b>Circuit Redesign :</b> Components or sections of the circuit prone to failure are redesigned using advanced methodologies and updated components. Interface protection mechanisms are incorporated to safeguard against external circuit malfunctions.</li>  
  <li> <b>Component Evaluation :</b> The BOM is reviewed to identify outdated components and recommend replacements with reliable, industry-standard alternatives, ensuring better performance and longevity.</li>
  <li><b>Modern PCB Design :</b> A new PCB layout is created using advanced design tools, adhering to current safety and industry standards. The updated design ensures improved performance and reliability.</li>
  <li> <b>Sample Fabrication and Testing :</b> Once the redesign is complete, a sample board is manufactured and rigorously tested. After successful validation, formal approval is sought, and production-ready designs are prepared.</li>
  
</ol>
<b>Case Study: Reverse Engineering for a Laser Range Finder</b> <br />
ATS successfully re-engineered the Controller PCB for a Laser Range Finder (LRF) used in the Gunner's Main Sight for the Combat Vehicle Research & Development Establishment (CVRDE) in collaboration with Bharat Electronics Limited (BEL). The existing board had obsolete components, limiting its functionality.
<ul>
  <li>ATS provided a Form, Fit, and Function (F3) solution by analyzing and replicating the design with modern components.</li>
  <li>The new PCB maintained compatibility with the original system while delivering improved reliability and performance.</li>
</ul>
</Text>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'2.5rem' }}>
<div style={{flex: 1}}>
<Text fz={25} fw='bold'>PCB Highlights: Laser Range Finder Board
  </Text>
  
  
<Text fz={22}>The redesigned PCB for the LRF retained the pentagon shape of the original board while incorporating green solder mask layers. The back side of the PCB was optimized to enhance durability and accommodate modern component layouts.
 <br />
ATS’s reverse engineering services ensure seamless upgrades and long-term solutions for legacy PCBs, empowering industries to overcome obsolescence and improve functionality.

</Text>
</div>
<div style={{flex: 0.4}}>
  <Image src='https://qiniu.digood-assets-fallback.work/460/1575647459_3.jpg' ></Image>
</div>
</div>
</div>
</ScrollArea>


      </div>
     },
    { label: 'Product Engineering', content: 
      <div style={{justifyContent:'center',alignContent:'center'}}>
        <ScrollArea h={700}>
          
      <Text fz={25} fw='bold' >Expertise in Embedded Systems Development</Text>
        <Text fz={22}  >ATS excels in a wide range of engineering domains, including PCB design, FPGA development, embedded software, system software, application software, and mechanical design. We provide end-to-end solutions for embedded systems development, covering every stage of the product life cycle—from initial conceptualization and requirements gathering to verification, validation, qualification, prototyping, and long-term support.</Text>

      
      <Center mt='5rem'>
         <Image src='https://www.bursys.com/wp-content/uploads/2023/04/six-stages-of-product-development.png' width='80vh'> </Image>
     </Center>
       <div style={{marginTop:'2rem'}}>
      <Text fz={25} fw='bold' >Comprehensive Product Engineering Support </Text>
      <Text fz={22}>
      With over a decade of experience, ATS is equipped to assist at any stage of your product development process, whether supporting a specific phase or managing the entire development cycle from start to finish.

      <b>Key Products and Solutions</b>
<ol type='1'>
<li>
<div style={{ display: 'flex', justifyContent: 'space-between',marginTop:'2.5rem' }}>
<div style={{ flex:1}}>
<b>BLDC Motor Driver PCB :</b> This high-power, compact driver board is designed for brushless DC motors, operating at an input voltage of 60 VDC. It features integrated brake control, which can be operated via I/O or serial communication interfaces.

<ul type='disc'>
  <li>Supports open-loop control for three- or four-phase motors.
  </li>
  <li>Includes a rotor position decoder for precise commutation sequencing.</li>
  <li>Features protective mechanisms such as undervoltage lockout and cycle-by-cycle current limiting.</li>
  <li>Operates effectively in closed-loop systems when used with a microcontroller board.</li>
 
</ul>
</div>
<div style={{ flex: 0.35}}>
  <Image src='https://i.ebayimg.com/images/g/fJgAAOSwX51mlPGE/s-l400.png'></Image>
</div>
</div>
<br/>
<i>Specifications:</i> A green-and-black rectangular PCB with efficient layout and robust performance, ideal for motor control applications.

 </li>
  <li><b>Analog Controller for Electro-Hydraulic Actuator :</b>Designed as a position control servo amplifier, this unit regulates current flow to torque motor coils in servo valves, ensuring precise hydraulic actuation.
  <ul type='disc'>
    <li>Processes command and feedback signals in DC for optimal control.</li>
    <li>Operates at 28 VDC and houses two servo amplifiers in a compact unit weighing 1.5 kg.</li>
    <li>Developed for high reliability in demanding environments.</li>
  </ul> <br/>
  <i>Specifications: </i>A rectangular green PCB encased in a gold-colored metal housing for durability and effective heat management.
  </li>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'2.5rem' }}>
  <div style={{ flex: 0.3,}}><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfK9REOGYxSIOQa_4x6mnen9q6vHQe-xnQg&s'></Image></div> 
  <div style={{ flex: 1,marginLeft:'1rem'}}>
  <li><b>High-Power BLDC Motor Controllers :</b> ATS offers versatile and optimized solutions for motion control, supporting a wide range of voltage and current ratings.
  <ul type='disc'>
    <li>Sensored BLDC motor controller with isolated driver and power stage.</li>
    <li>Utilizes Hall Effect sensors for rotor position detection.</li>
    <li>Features LVDT signal conditioning to process position data from linear actuators.</li>
    <li>Incorporates additional sensors to monitor critical variables like motor phase current and velocity.</li>
    <li>Designed for high-performance applications with minimal wiring and compact hardware, capable of handling high power loads.</li>
  </ul>


 
  <br/>
  <i>Applications:</i> Automotive and industrial systems requiring efficient control of 3-phase BLDC motors using N-channel external power MOSFETs.
  </li> 
  </div>
  
  </div>
  <br/>
  ATS’s innovative designs ensure robust and reliable solutions for advanced motion control and hydraulic systems, meeting the highest industry standards while addressing modern technological challenges.
  </ol>
</Text>
</div>
</ScrollArea>

</div>
     },
    { label: 'RF and Microwave Design', content: 
      <div style={{justifyContent:'center',alignContent:'center'}}>
        <ScrollArea h={700}>
          
      <Text fz={25} fw='bold' >Expertise in RF Modules and Microwave Assemblies</Text>
        <Text fz={22}  >ATS specializes in delivering custom RF modules and integrated microwave assemblies, leveraging extensive expertise in RF and microwave design, assembly, and testing. Our proven capabilities span from initial concept development to environmental testing and qualification, ensuring reliable and high-performing solutions tailored to meet your specific needs.</Text>

      
      <Center mt='5rem'>
         <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSGXaY2kkXX3JQEtCOqQWDd1tsROZpdR3UQ&s' width='50vh'> </Image>
     </Center>
       <div style={{marginTop:'2rem'}}>
      <Text fz={25} fw='bold' >Comprehensive RF and Microwave Services </Text>
      <Text fz={22}>
      With a robust foundation in RF, microwave, analog, and electronic circuit design, ATS is equipped to support diverse requirements, including:
      <b>Key Products and Solutions</b>

<li>
Radio Transceiver Architecture Design: Complete systems from ADC/DAC to antenna.</li>

  <li>RF Systems Engineering: Systems analysis, modeling, and simulation for optimized performance.
  </li>
  <li>Prototype Development: End-to-end solutions covering schematics, PCB layout, assembly, and testing.</li>

 
<br/>

<b>Cutting-Edge Technologies</b> We design, develop, and validate high-performance modules, subsystems, and instrumentation for applications across the radio frequency (RF), microwave, and millimeter-wave spectrum, covering frequencies from DC to 110 GHz.
 <br/><br/>
 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'2.5rem' }}>
 <div style={{ flex: 1, }}>
  <b>Core Offerings</b>
  <ol type='1'>
  <li><b>RF Systems Engineering and Design :</b> ATS provides expert systems engineering services to design and optimize RF systems tailored to your specific applications.</li>
  <li><b>RF Subsystems and Module Design :</b> Our custom module designs ensure superior performance, meeting stringent industry standards.</li>
  </ol>
  </div>
  <div style={{ flex: 0.3,}}><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfK9REOGYxSIOQa_4x6mnen9q6vHQe-xnQg&s'></Image></div> 
  </div>
  
   <br/>
   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'2.5rem' }}>
   <div style={{ flex: 0.3,}}><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOKuB0tTKM3pyqJdZZm-YjZ3lJlqc45aSlQ&s'></Image></div> 
   <div style={{ flex: 1, marginRight: '2rem' }}>
  <b>Solutions We Provide </b>
  <ul>
  <li><b>Amplifiers :</b> LNA, PA, driver, wideband, VGA, AGC, and limiting amplifiers.</li>
  <li><b>Attenuators :</b> High-precision attenuation solutions for diverse applications.</li>
  <li><b>Data Converters :</b>  High-speed ADC/DAC designs for enhanced signal processing.</li>
  <li><b>Filters :</b> Expertise in discrete, distributed, and cavity filters for precise signal management.</li>
  <li><b>Mixers and Oscillators :</b> High-performance solutions for frequency conversion and stability.</li>
  <li><b>Phase Shifters and PLLs :</b> Advanced solutions for phase control and frequency synthesis.</li>
  <li><b>Switches and Signal Generators :</b> Reliable components for routing and signal creation.</li>
    
  </ul>
  </div>
  </div>

  <br/>
  <b>High-Power RF PCB Technology </b>
  ATS develops high-frequency PCBs for RF and microwave applications, including compact rectangular designs housed in gold-colored metal cases for optimal performance and durability.
<br/><br/>
By combining advanced technologies with comprehensive testing and qualification processes, ATS ensures robust, innovative, and efficient solutions for RF and microwave applications across various industries.
  
</Text>
</div>
</ScrollArea>

</div>
    },
    { label: 'PCB Design and Analysis', content: 
      <div style={{justifyContent:'center',alignContent:'center'}}>
      <ScrollArea h={700}>
        
    <Text fz={25} fw='bold' >Comprehensive PCB Layout and Analysis Services</Text>
      <Text fz={22}  >At ATS, we provide advanced PCB layout services to meet the diverse needs of modern electronics, from simple prototype boards to complex, high-performance multi-layer designs. Our expertise spans a range of applications, including multi-gigabit systems and high-volume consumer electronics, with a strong emphasis on signal integrity, manufacturability, and reliability.</Text>

    
    <Center mt='5rem'>
       <Image src='https://res.cloudinary.com/uf-552861/image/upload/v1727885566/simple-pcb-layout_lml7zo.jpg' width='70vh'> </Image>
   </Center>
     <div style={{marginTop:'2rem'}}>
    <Text fz={25} fw='bold' >PCB Layout Design Expertise</Text>
    <Text fz={22}>
    Our experienced team specializes in creating high-density, high-speed circuit layouts where electrical performance is paramount. Collaborating closely with manufacturers, we ensure efficient assembly and testing, delivering high-yield designs optimized for production.<br/><br/>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'2.5rem' }}>
    <div style={{ flex: 0.9, marginRight: '2rem' }}>

    <b>Key Capabilities :</b>

<li>
Designing 2- to 20-layer PCBs using industry-leading CAD tools.</li>

<li>Adhering to Design for Manufacturability and Assembly (DFMA) and Design for Testability (DFT) methodologies.
</li>
<li>Complying with client guidelines and IPC standards for superior PCB designs.</li>
<li>Generating comprehensive manufacturing files (Gerber or ODB++) for seamless production.</li>
<li>Creating mechanically constrained PCB layouts for specific applications.</li>
<li>Converting designs from PTH to SMT, addressing manufacturability and compliance requirements.</li>
<br/>
</div>
<div style={{ flex: 0.4,}}><Image src='https://www.raypcb.com/wp-content/uploads/2021/03/5fdec28f7fc37b7-1.jpg'></Image></div> 
</div>
<b>Signal Integrity Analysis</b> As digital circuit frequencies increase, maintaining signal integrity (SI) is critical to ensuring reliable performance. ATS brings extensive expertise in SI, working with clients early in the design phase to determine the required simulation level, reducing risks and optimizing circuit functionality.
<br/><br/>


<b>Key Solutions for Signal Integrity Challenges :</b>
<ul type='disc'>
<li>Advanced simulations using <b>HyperLynx 8.2 Update-1 </b> for post-layout analysis.</li>
<li>Addressing overshoot, undershoot, reflections, and termination issues to ensure stable signal transmission.</li>
  <li>Comprehensive analysis of signal topologies to improve design robustness.</li>
</ul> <br/>
<b>Why Signal Integrity Matters : </b><br/>
In modern high-speed circuits, even short connections can act as transmission lines, impacting signal quality. Poor SI can lead to circuit malfunctions, making SI analysis an essential component of every design process.

<br/><br/>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'2.5rem' }}>
<div style={{ flex: 0.5,}}><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQ2i2oyJj5iOUOq6Xv8KjePHAjcvs76OWHA&s' width='20rem'></Image></div> 
<div style={{ flex: 1,}}> 
<b>Thermal Analysis</b><br/>
Thermal performance is crucial for the reliability and efficiency of electronic devices. At ATS, we perform detailed thermal simulations to identify and resolve heat-related issues in PCB designs, ensuring optimal performance under operational conditions.
<br/><br/>
<Text fz={20} fw={700}> Thermal Analysis Highlights :</Text>
<li>Predicting operating temperatures of PCBs to address thermal challenges effectively.</li>
<li>Utilizing <b>HyperLynx Thermal Software V9.1</b> for accurate simulations and analysis.</li>
<li>Determining <b>θJA (junction-to-ambient thermal resistance)</b> using JEDEC-compliant test boards.</li>
<li>Providing insights into the optimal placement of components from a thermal perspective.</li>
</div>

</div>

</Text>
</div>
</ScrollArea>

</div>  
    },
    
  ];

  
  useEffect(() => {
    if (tab) {
        setActive(tab);
    }
}, [tab]);
  const links = navLinks.map((item) => (
    <div
      key={item.label}
      style={{  
        margin: '1rem 0',
        textAlign: 'center',
      }}
    >
      <Link
        to={`#${item.label}`}
        className={`nav-link ${item.label === active ? 'active' : ''}`} 
        onClick={() => setActive(item.label)} 
        style={{
         
          color: '#0168CB',
          textDecoration: 'none',
        }}
      >
        {item.label}
      </Link>
    </div>
  ));

 
  const activeContent = navLinks.find((item) => item.label === active)?.content;

  return (
    <>
     <div style={{ backgroundColor: 'black', }}>
        <CustomHeader />
        </div>
    <div style={{ height: '50vh', position: 'relative' }}>
        <div
          style={{
            backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/0493/0131/b1e9a5d1d4f1f0997e01513dd7ad7e61?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARsdSZ2yiHVclnVhhXv4KLvijfhDci6~YJS-wOwqsIlK7Jwq9DXOcGPKQxPAR9zvCvLUS8g7~FuCFuWImds59snQDW1D8vcguz-QAGjvmCxD~RMkZW0mepGwopG5cGnQW1bQWVBw7VnWh6kDNeiTFF91uvOwKB2BsY3w-ENc81dqg5z~eKAleUpR9kwflTeGytc50etj5t0HQ4yL14PQ44UEcios975QUBp6V-F3K-83UEoRiMbOSMDSKasjtG7s~QLIAslSzHh7-eFlrq17WMdrbzzTQfM9qmWPL9nrcxjI3-E7yMrOdyFPKKGj12vwszO2h7d0URJHRTzHboOhmw__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          >
            <Text
              color="white"
              fz="55px"
              fw="bolder"
              style={{ textAlign: 'center', zIndex: 1 }}
            >
             Services
            </Text>
          </div>
        </div>
      </div>
    <div
      style={{
        display: 'flex',
        height: '115vh',
        backgroundColor: 'black',
      }}
    >
      
      
      <Navbar
        height="110vh"
        p="sm"
        mt='1.5rem'
        style={{ backgroundColor: 'black', borderRight: '2px solid gray' }}
        width={{ base: 300 }}
      >
       
        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          <div>{links}</div>
        </Navbar.Section>
      </Navbar>

      
      <div
        style={{
          flex: 1, 
          padding: '2rem',
          color: 'white',
          marginTop:'1.5rem'
        }}
      >
        
        <Text>{activeContent}</Text>
      </div>
    </div>
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
  <Transition transition="slide-up" mounted={scroll.y > 0}>
    {(transitionStyles) => (
      <Button 
        className="affix-btn" 
        style={transitionStyles}
        onClick={() => scrollTo({ y: 0 })}
      >
        <FaArrowUp size="1rem" />
      </Button>
    )}
  </Transition>
</Affix>
<Footer1 />
    </>
  );
};

export default Services1;
