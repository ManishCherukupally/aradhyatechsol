import React, { useEffect } from "react";
import { Text, Card, Container, Grid, Accordion, Center, Image, AppShell, Affix, Transition, rem, Button } from "@mantine/core";
import { IoIosArrowForward } from "react-icons/io";
import CustomHeader from "../Header/CustomHeader";
import Footer1 from "../Footer/Footer1";
import { FaArrowUp } from "react-icons/fa6";
import { useWindowScroll } from "@mantine/hooks";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ServiceMobile = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [isVisible, setIsVisible] = React.useState(false);
  const location = useLocation(); // Get the location object
  const { defaultAccordionValue } = location.state || {};
  const [opened, setOpened] = React.useState(defaultAccordionValue || null);
  const navigate = useNavigate();
  const { section } = useParams();


  useEffect(() => {
    if (section) {
      setOpened(section);
    }
  }, [section]);


  return (
    <AppShell
      header={
        <div style={{ backgroundColor: 'black', }}>
          <CustomHeader />
        </div>
      }
      styles={{
        main: {
          padding: 0,

        },
      }}
    >
      <>

        <div style={{ height: '65vh', }}>
          <div
            style={{
              backgroundImage: 'url(https://media.istockphoto.com/id/1203511380/photo/business-technology-internet-and-network-concept-technical-support-center-customer-service.jpg?s=612x612&w=0&k=20&c=oMQtl7I59PSa03u0Adsx37FuOODmtxzAFXuuTknZkCc=)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              marginTop: '6rem'
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
                style={{ textAlign: 'center', zIndex: 1, fontFamily: '"Marcellus", Sans-serif', animation: 'fadeSlideUp 1.5s ease-out', }}
              >
                Services
              </Text>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "black",
            padding: "2rem 0",
            width: "100%",
            maxWidth: "100vw",
            overflowX: "hidden",
            minHeight: "100vh",
          }}
        >
          <Container mb="3rem">
            <Grid>
              <Grid.Col md={6} lg={5}>
                {/* Wrapper to ensure a minimum height */}
                <div style={{ minHeight: "300px" }}>
                  <Card
                    shadow="md"
                    padding="xl"
                    radius="md"
                    style={{
                      backgroundColor: "#002f5a",
                      color: "white",
                      position: "relative",
                      width: "100%",
                      animation: isVisible ? "slideInLeftToRight 3s ease-out" : "slideInLeftToRight 3s ease-out",
                      transition: "height 0.3s ease-in-out", // Smooth height transition
                    }}
                  >
                    <Accordion
                      chevron={<IoIosArrowForward />}
                      variant="default"
                      value={opened}
                      onChange={setOpened}
                      style={{ marginTop: "1rem", color: "white" }}
                      styles={{
                        item: {
                          borderBottom: "none",
                          color: "white",
                          backgroundColor: "transparent",
                          transition: "transform 0.2s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        },
                        control: {
                          color: "white",
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          padding: "0.5rem",
                          whiteSpace: "normal",
                          flexWrap: "wrap",
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "white",
                          },
                        },
                      }}
                    >
                      <Accordion.Item value="embedded-design">
                        <Accordion.Control>Embedded Design</Accordion.Control>

                        {/* 👇 Ensure panel does not push other items down too much */}

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>
                          <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif' }}>
                            Embedded Design Services (EDS) encompass a wide array of hardware design solutions, tailored to meet diverse needs—from compact, power-efficient designs to robust, high-performance systems using advanced embedded processors and DSPs. At Aaradhya Techno Solutions, our expertise spans the entire development cycle, including schematic creation, bill of materials optimization, PCB layout and design, prototyping, production assistance, and FPGA design. These services are customized to address unique client requirements, ensuring precision and efficiency in every project.
                          </Text>

                          <Center mt="2rem">
                            <Image
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnxgNkrqqab2BlGjc_AAv7tUGKxBCOHuvIA&s"
                              width="20vh"
                            />
                          </Center>

                          <div style={{ marginTop: "1rem" }}>
                            <Text fz={18} fw="bold" style={{ fontFamily: '"Marcellus", Sans-serif' }}>
                              Our Expertise
                            </Text>

                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif' }}>
                              <ul>
                                <li style={{ fontFamily: '"Open Sans", Sans-serif', }}>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Low Power Solutions :</b> Specializing in efficient architecture design and physical implementation for minimal power consumption. </li>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif', }}>High-Performance Systems :</b> Expertise in advanced pipeline design and high-speed I/Os.</li>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Multiple Clock Domains :</b> Proficiency in handling complex clocking requirements across designs.</li>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif', }}>High-Speed Interfaces :</b> Skilled in implementing SERDES (10G serial, XAUI, PCIe), PCI-Express, USB 2.0/3.0, and Thunderbolt technologies.</li>
                                <li> <b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Memory Sub-Systems :</b> Development of high-performance memory solutions, including DDR2/DDR3 memory controllers and Flash controllers.</li>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Processor Architectures :</b> Experience with major CPU, GPU, and DSP architectures, including multi-core ARM and custom designs.</li>
                                <li> <b style={{ fontFamily: '"Marcellus", Sans-serif', }}>FPGA Solutions :</b> Comprehensive FPGA design, simulation, and FPGA-to-ASIC conversions.</li>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Lens Control PCBs :</b> Designing, fabricating, assembling, and testing control PCBs that regulate zoom speed and focus for long-range night vision IR cameras.</li>
                              </ul>
                              <b style={{
                                fontFamily: '"Marcellus", Sans-serif',
                              }}>Lens Control Unit Solutions</b> <br />
                              Aaradhya Techno Solutions specializes in green circuit board designs for lens control units, enabling precise control of zoom and focus functionalities in high-performance infrared cameras. These solutions are rigorously developed, prototyped, and tested to ensure optimal performance in challenging environments.</Text>

                          </div>
                        </Accordion.Panel>

                      </Accordion.Item>

                      {/* Other Accordion Items */}
                      <Accordion.Item mb="xl" value="reverse-engineering">
                        <Accordion.Control>Reverse Engineering</Accordion.Control>

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>
                          <Text fz={18} fw='bold' style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out" }}>Reverse Engineering: PCB Prototyping, Testing, and Retrofitting</Text>
                          <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out" }} >At Aaradhya Techno Solutions, we specialize in the reverse engineering of printed circuit boards (PCBs) to help customers overcome challenges such as obsolete components or unavailability of design data. By analyzing a sample board, including its components, we recreate all necessary data, enabling duplication or upgrades. Our expertise extends to reverse engineering PCBs with programmed integrated circuits, custom parts, and obsolete technologies, ensuring compatibility with modern requirements.</Text>


                          <Center mt='5rem' >
                            <Image src='https://www.venture-mfg.com/wp-content/uploads/2018/12/Figure-18-PCB-Assembly.jpg' width='40vh' style={{ animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}> </Image>
                          </Center>
                          <div style={{ marginTop: '2rem' }}>
                            <Text fz={18} style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }} fw='bold' >Step-by-Step Process of PCB Reverse Engineering </Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                              <ol type='1'>
                                <li>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Schematic Development :</b> The process begins by creating a circuit diagram from the sample PCB. This schematic serves as the foundation for developing a comprehensive bill of materials (BOM) that outlines all components used in the design. </li>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Original Design Analysis :</b>The original PCB design is scrutinized to identify potential issues, such as miscalculations or inefficiencies. We also collaborate with customers to understand any recurring failures or limitations they’ve experienced.</li>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Circuit Redesign :</b> Components or sections of the circuit prone to failure are redesigned using advanced methodologies and updated components. Interface protection mechanisms are incorporated to safeguard against external circuit malfunctions.</li>
                                <li> <b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Component Evaluation :</b> The BOM is reviewed to identify outdated components and recommend replacements with reliable, industry-standard alternatives, ensuring better performance and longevity.</li>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Modern PCB Design :</b> A new PCB layout is created using advanced design tools, adhering to current safety and industry standards. The updated design ensures improved performance and reliability.</li>
                                <li> <b style={{ fontFamily: '"Marcellus", Sans-serif', }}>Sample Fabrication and Testing :</b> Once the redesign is complete, a sample board is manufactured and rigorously tested. After successful validation, formal approval is sought, and production-ready designs are prepared.</li>

                              </ol>
                              <b style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3.5s ease-out" : "slideInBottomToTop 3.5s ease-out", }}>Case Study: Reverse Engineering for a Laser Range Finder</b> <br />
                              Aaradhya Techno Solutions successfully re-engineered the Controller PCB for a Laser Range Finder (LRF) used in the Gunner's Main Sight for the Combat Vehicle Research & Development Establishment (CVRDE) in collaboration with Bharat Electronics Limited (BEL). The existing board had obsolete components, limiting its functionality.
                              <ul style={{ animation: isVisible ? "slideInBottomToTop 3.5s ease-out" : "slideInBottomToTop 3.5s ease-out", }}>
                                <li>Aaradhya Techno Solutions provided a Form, Fit, and Function (F3) solution by analyzing and replicating the design with modern components.</li>
                                <li>The new PCB maintained compatibility with the original system while delivering improved reliability and performance.</li>
                              </ul>
                            </Text>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '3.5rem', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3.5s ease-out", }}>
                              <div style={{ flex: 1 }}>
                                <Text fz={18} fw='bold' style={{ fontFamily: '"Marcellus", Sans-serif', }}>PCB Highlights: Laser Range Finder Board
                                </Text>


                                <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', }}>The redesigned PCB for the LRF retained the pentagon shape of the original board while incorporating green solder mask layers. The back side of the PCB was optimized to enhance durability and accommodate modern component layouts.
                                </Text>
                                <div style={{ flex: 0.4, }}>
                                  <Center>
                                    <Image src='https://qiniu.digood-assets-fallback.work/460/1575647459_3.jpg' width='35vh' mt='md'></Image>
                                  </Center>
                                </div>
                                <Text fz={16.5} mt='xl' style={{ fontFamily: '"Open Sans", Sans-serif', }}>
                                  Aaradhya Techno Solutions’s reverse engineering services ensure seamless upgrades and long-term solutions for legacy PCBs, empowering industries to overcome obsolescence and improve functionality.

                                </Text>
                              </div>

                            </div>
                          </div>
                        </Accordion.Panel>

                      </Accordion.Item>
                      <Accordion.Item mb="xl" value="product-engineering">
                        <Accordion.Control>Product Engineering</Accordion.Control>

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>
                          <Text fz={22} fw='bold' style={{ fontFamily: '"Marcellus", Sans-serif', animation: "slideInBottomToTop 1.5s ease-out" }}>Expertise in Embedded Systems Development</Text>
                          <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: "slideInBottomToTop 1.5s ease-out" }}>Aaradhya Techno Solutions excels in a wide range of engineering domains, including PCB design, FPGA development, embedded software, system software, application software, and mechanical design. We provide end-to-end solutions for embedded systems development, covering every stage of the product life cycle—from initial conceptualization and requirements gathering to verification, validation, qualification, prototyping, and long-term support.</Text>


                          <Center mt='5rem'>
                            <Image
                              style={{ animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}
                              src='https://www.bursys.com/wp-content/uploads/2023/04/six-stages-of-product-development.png' width='50vh'> </Image>
                          </Center>
                          <div style={{ marginTop: '2rem' }}>
                            <Text fz={18} fw='bold' style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }} >Comprehensive Product Engineering Support </Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', }}>
                              With over a decade of experience, Aaradhya Techno Solutions is equipped to assist at any stage of your product development process, whether supporting a specific phase or managing the entire development cycle from start to finish.
                            </Text>

                            <Text mt='lg' fz={18} style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>

                              <b>Key Products and Solutions</b>
                              <ol type='1' style={{ fontFamily: '"Open Sans", Sans-serif', fontSize: '16.5', paddingLeft: '0.6rem' }}>
                                <li>
                                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '2.5rem' }}>
                                    <div style={{ flex: 0.7, marginRight: '2rem' }}>
                                      <b style={{ fontFamily: '"Marcellus", Sans-serif', }}>BLDC Motor Driver PCB :</b> This high-power, compact driver board is designed for brushless DC motors, operating at an input voltage of 60 VDC. It features integrated brake control, which can be operated via I/O or serial communication interfaces.

                                      <ul type='disc'>
                                        <li>Supports open-loop control for three- or four-phase motors.
                                        </li>
                                        <li>Includes a rotor position decoder for precise commutation sequencing.</li>
                                        <li>Features protective mechanisms such as undervoltage lockout and cycle-by-cycle current limiting.</li>
                                        <li>Operates effectively in closed-loop systems when used with a microcontroller board.</li><br />

                                      </ul>

                                    </div>
                                    <i style={{ fontFamily: '"Marcellus", Sans-serif', fontWeight: 'bold', }}>Specifications :</i> A green-and-black rectangular PCB with efficient layout and robust performance, ideal for motor control applications.

                                    <div style={{ flex: 0.35, animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                                      <Center>
                                        <Image src='https://i.ebayimg.com/images/g/fJgAAOSwX51mlPGE/s-l400.png' width='30vh' mt='md'></Image>
                                      </Center>
                                    </div>
                                  </div>



                                </li>
                                <br />
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif', }}> Analog Controller for Electro-Hydraulic Actuator :</b> Designed as a position control servo amplifier, this unit regulates current flow to torque motor coils in servo valves, ensuring precise hydraulic actuation.
                                  <ul type='disc'>
                                    <li>Processes command and feedback signals in DC for optimal control.</li>
                                    <li>Operates at 28 VDC and houses two servo amplifiers in a compact unit weighing 1.5 kg.</li>
                                    <li>Developed for high reliability in demanding environments.</li>
                                  </ul> <br />
                                  <i style={{ fontFamily: '"Marcellus", Sans-serif', fontWeight: 'bold' }}>Specifications: </i>A rectangular green PCB encased in a gold-colored metal housing for durability and effective heat management.
                                </li>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '2.5rem', animation: isVisible ? "slideInBottomToTop 3.5s ease-out" : "slideInBottomToTop 3.5s ease-out", }}>
                                  <div style={{ flex: 0.3, }}>
                                    <Center>
                                      <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfK9REOGYxSIOQa_4x6mnen9q6vHQe-xnQg&s' height='30vh' mb='md'></Image>
                                    </Center>
                                  </div>
                                  <div style={{ flex: 0.7, }}>
                                    <li><b style={{ fontFamily: '"Marcellus", Sans-serif', marginLeft: '0.5rem' }}>High-Power BLDC Motor Controllers :</b> Aaradhya Techno Solutions offers versatile and optimized solutions for motion control, supporting a wide range of voltage and current ratings.
                                      <ul type='disc'>
                                        <li>Sensored BLDC motor controller with isolated driver and power stage.</li>
                                        <li>Utilizes Hall Effect sensors for rotor position detection.</li>
                                        <li>Features LVDT signal conditioning to process position data from linear actuators.</li>
                                        <li>Incorporates additional sensors to monitor critical variables like motor phase current and velocity.</li>
                                        <li>Designed for high-performance applications with minimal wiring and compact hardware, capable of handling high power loads.</li>
                                      </ul>



                                      <br />
                                      <i style={{ fontFamily: '"Marcellus", Sans-serif', fontWeight: 'bold' }}>Applications : </i> Automotive and industrial systems requiring efficient control of 3-phase BLDC motors using N-channel external power MOSFETs.
                                    </li>
                                  </div>

                                </div>
                                <br />
                                Aaradhya Techno Solutions’s innovative designs ensure robust and reliable solutions for advanced motion control and hydraulic systems, meeting the highest industry standards while addressing modern technological challenges.
                              </ol>
                            </Text>
                          </div>
                        </Accordion.Panel>


                      </Accordion.Item>
                      <Accordion.Item mb="xl" value="rf-design">
                        <Accordion.Control>RF and Microwave Design</Accordion.Control>

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>
                          <Text fz={18} fw='bold' style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out" }}>Expertise in RF Modules and Microwave Assemblies</Text>
                          <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out" }} >Aaradhya Techno Solutions specializes in delivering custom RF modules and integrated microwave assemblies, leveraging extensive expertise in RF and microwave design, assembly, and testing. Our proven capabilities span from initial concept development to environmental testing and qualification, ensuring reliable and high-performing solutions tailored to meet your specific needs.</Text>



                          <div style={{ marginTop: '0.1rem', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                            <Text fz={18} fw='bold' style={{ fontFamily: '"Marcellus", Sans-serif', }}>Comprehensive RF and Microwave Services </Text>
                            <Text fz={16.5} mr='0.5rem' style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                              With a robust foundation in RF, microwave, analog, and electronic circuit design, Aaradhya Techno Solutions is equipped to support diverse requirements, including :

                              <Text mt='lg' fz={18} style={{ fontFamily: '"Marcellus", Sans-serif', fontWeight: 'bolder' }}>
                                Key Products and Solutions
                              </Text>
                              <li>
                                Radio Transceiver Architecture Design: Complete systems from ADC/DAC to antenna.</li>

                              <li>RF Systems Engineering: Systems analysis, modeling, and simulation for optimized performance.
                              </li>
                              <li>Prototype Development: End-to-end solutions covering schematics, PCB layout, assembly, and testing.</li>


                              <br />

                              <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Cutting-Edge Technologies</b> We design, develop, and validate high-performance modules, subsystems, and instrumentation for applications across the radio frequency (RF), microwave, and millimeter-wave spectrum, covering frequencies from DC to 110 GHz.
                              <br />
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '2rem', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                                <div style={{ flex: 1, }}>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Core Offerings</b>
                                  <ol type='1' style={{ paddingLeft: '0.7rem' }}>
                                    <li ><b style={{ fontFamily: '"Marcellus", Sans-serif', }}>RF Systems Engineering and Design :</b> Aaradhya Techno Solutions provides expert systems engineering services to design and optimize RF systems tailored to your specific applications.</li>
                                    <div style={{ animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                                      <Center style={{ animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                                        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfK9REOGYxSIOQa_4x6mnen9q6vHQe-xnQg&s' width='30vh' mt='lg' mb='lg'>
                                        </Image>
                                      </Center>
                                    </div>
                                    <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>RF Subsystems and Module Design :</b> Our custom module designs ensure superior performance, meeting stringent industry standards.</li>
                                  </ol>
                                </div>

                              </div>

                              <br />
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', }}>
                                <div style={{ flex: 0.4, }} ><Image style={{ animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOKuB0tTKM3pyqJdZZm-YjZ3lJlqc45aSlQ&s' height='30vh' mt='md' mb='md'></Image></div>
                                <div style={{ flex: 1, marginRight: '2rem', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Solutions We Provide </b>
                                  <ul>
                                    <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Amplifiers :</b> LNA, PA, driver, wideband, VGA, AGC, and limiting amplifiers.</li>
                                    <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Attenuators :</b> High-precision attenuation solutions for diverse applications.</li>
                                    <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Data Converters :</b>  High-speed ADC/DAC designs for enhanced signal processing.</li>
                                    <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Filters :</b> Expertise in discrete, distributed, and cavity filters for precise signal management.</li>
                                    <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Mixers and Oscillators :</b> High-performance solutions for frequency conversion and stability.</li>
                                    <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Phase Shifters and PLLs :</b> Advanced solutions for phase control and frequency synthesis.</li>
                                    <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Switches and Signal Generators :</b> Reliable components for routing and signal creation.</li>

                                  </ul>
                                </div>
                              </div>

                              <br />
                              <b style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>High-Power RF PCB Technology </b>
                              Aaradhya Techno Solutions develops high-frequency PCBs for RF and microwave applications, including compact rectangular designs housed in gold-colored metal cases for optimal performance and durability.
                              <br /><br />
                              By combining advanced technologies with comprehensive testing and qualification processes, Aaradhya Techno Solutions ensures robust, innovative, and efficient solutions for RF and microwave applications across various industries.

                            </Text>
                          </div>
                        </Accordion.Panel>


                      </Accordion.Item>
                      <Accordion.Item mb="xl" value="pcb-design">
                        <Accordion.Control>PCB Design and Analysis</Accordion.Control>

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>
                          <Text fz={18} fw='bold' style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out" }}>Comprehensive PCB Layout and Analysis Services</Text>
                          <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out" }} >At Aaradhya Techno Solutions, we provide advanced PCB layout services to meet the diverse needs of modern electronics, from simple prototype boards to complex, high-performance multi-layer designs. Our expertise spans a range of applications, including multi-gigabit systems and high-volume consumer electronics, with a strong emphasis on signal integrity, manufacturability, and reliability.</Text>


                          <Center mt='5rem' style={{ animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                            <Image src='https://res.cloudinary.com/uf-552861/image/upload/v1727885566/simple-pcb-layout_lml7zo.jpg' width='45vh'> </Image>
                          </Center>
                          <div style={{ marginTop: '2rem', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                            <Text fz={22} style={{ fontFamily: '"Marcellus", Sans-serif', }} fw='bold' >PCB Layout Design Expertise</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', }}>
                              Our experienced team specializes in creating high-density, high-speed circuit layouts where electrical performance is paramount. Collaborating closely with manufacturers, we ensure efficient assembly and testing, delivering high-yield designs optimized for production.<br /><br />

                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '2.5rem' }}>
                                <div style={{ flex: 0.9, marginRight: '2rem' }}>

                                  <b style={{ fontFamily: '"Marcellus", Sans-serif', }} >Key Capabilities :</b>

                                  <li>
                                    Designing 2- to 20-layer PCBs using industry-leading CAD tools.</li>

                                  <li>Adhering to Design for Manufacturability and Assembly (DFMA) and Design for Testability (DFT) methodologies.
                                  </li>
                                  <li>Complying with client guidelines and IPC standards for superior PCB designs.</li>
                                  <li>Generating comprehensive manufacturing files (Gerber or ODB++) for seamless production.</li>
                                  <li>Creating mechanically constrained PCB layouts for specific applications.</li>
                                  <li>Converting designs from PTH to SMT, addressing manufacturability and compliance requirements.</li>
                                  <br />
                                </div>
                                <div style={{ flex: 0.4, }}><Image src='https://www.raypcb.com/wp-content/uploads/2021/03/5fdec28f7fc37b7-1.jpg' width={'45vh'} mb='md'></Image></div>
                              </div>
                              <b style={{ fontFamily: '"Marcellus", Sans-serif', }} >Signal Integrity Analysis</b> As digital circuit frequencies increase, maintaining signal integrity (SI) is critical to ensuring reliable performance. Aaradhya Techno Solutions brings extensive expertise in SI, working with clients early in the design phase to determine the required simulation level, reducing risks and optimizing circuit functionality.
                              <br /><br />


                              <b style={{ fontFamily: '"Marcellus", Sans-serif', }} >Key Solutions for Signal Integrity Challenges :</b>
                              <ul type='disc'>
                                <li>Advanced simulations using <b>HyperLynx 8.2 Update-1 </b> for post-layout analysis.</li>
                                <li>Addressing overshoot, undershoot, reflections, and termination issues to ensure stable signal transmission.</li>
                                <li>Comprehensive analysis of signal topologies to improve design robustness.</li>
                              </ul> <br />
                              <b style={{ fontFamily: '"Marcellus", Sans-serif', }} >Why Signal Integrity Matters : </b><br />
                              In modern high-speed circuits, even short connections can act as transmission lines, impacting signal quality. Poor SI can lead to circuit malfunctions, making SI analysis an essential component of every design process.

                              <br /><br />
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem', }}>
                                <div style={{ flex: 0.5, }}><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQ2i2oyJj5iOUOq6Xv8KjePHAjcvs76OWHA&s' width='20rem' mb='md'></Image></div>
                                <div style={{ flex: 1, }}>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif', }} >Thermal Analysis</b><br />
                                  Thermal performance is crucial for the reliability and efficiency of electronic devices. At Aaradhya Techno Solutions, we perform detailed thermal simulations to identify and resolve heat-related issues in PCB designs, ensuring optimal performance under operational conditions.
                                  <br /><br />
                                  <Text fz={22} fw={700} style={{ fontFamily: '"Marcellus", Sans-serif', }} > Thermal Analysis Highlights :</Text>
                                  <li>Predicting operating temperatures of PCBs to address thermal challenges effectively.</li>
                                  <li>Utilizing <b style={{ fontFamily: '"Marcellus", Sans-serif', }} >HyperLynx Thermal Software V9.1</b> for accurate simulations and analysis.</li>
                                  <li>Determining <b style={{ fontFamily: '"Marcellus", Sans-serif', }} >θJA (junction-to-ambient thermal resistance)</b> using JEDEC-compliant test boards.</li>
                                  <li>Providing insights into the optimal placement of components from a thermal perspective.</li>
                                </div>

                              </div>

                            </Text>
                          </div>
                        </Accordion.Panel>

                      </Accordion.Item>
                    </Accordion>
                  </Card>
                </div>
              </Grid.Col>
            </Grid>
          </Container >
        </div >
      </>
      <Footer1 />
      <Affix position={{ bottom: rem(20), right: rem(20) }} zIndex={1000}>
        <Transition transition="fade" mounted={scroll.y > 0}>
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
    </AppShell >
  );
};

export default ServiceMobile;
