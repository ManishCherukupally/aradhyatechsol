import React from "react";
import { Text, Card, Container, Grid, Accordion, Center, Image, AppShell, Affix, Transition, rem, Button } from "@mantine/core";
import { IoIosArrowForward } from "react-icons/io";
import CustomHeader from "../Header/CustomHeader";
import Footer1 from "../Footer/Footer1";
import Image1 from '../assets/sys3 1.png'
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { FaArrowUp } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const ProductMobile = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [isVisible, setIsVisible] = React.useState(false);
  const location = useLocation();
  const { defaultAccordionValue } = location.state || {};
  const [opened, setOpened] = React.useState(defaultAccordionValue || null);
  const isMobile = useMediaQuery("(max-width: 768px)");


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
              backgroundImage: 'url(https://getwallpapers.com/wallpaper/full/b/c/8/120093.jpg)',
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
                Products
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
                      transition: "height 0.3s ease-in-out",
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

                      <Accordion.Item value="systems">
                        <Accordion.Control p={'0.1rem'}>Systems</Accordion.Control>



                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>

                          <Center>
                            <Image src={Image1} width='40vh' style={{ animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out" }}> </Image>

                          </Center>
                          <div style={{ marginTop: '2rem', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out" }}>
                            <Text fz={16.5} style={{
                              fontFamily: '"Open Sans", Sans-serif',
                            }}>Aaradhya Techno Solutions offers a comprehensive selection of systems tailored to meet specific configuration needs. Our product lineup includes an array of advanced and specialized systems, such as:  </Text>
                            <Text fz={16.5}>
                              <ul style={{ fontFamily: '"Open Sans", Sans-serif', }}>
                                <li>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>MIL-STD-1553B Simulator – </b> A robust solution for simulating and testing avionics data bus communication.  </li>
                                <Center m='xl'>
                                  <Image src='https://www.ddc-web.com/resources/assets/images/_Press/BU_67X10T.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>High-Performance Computers – </b>Designed to handle demanding tasks with exceptional speed and reliability.  </li>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDVDNTkZ-zPz8jSz5J1EMGo-y-_G9S3El2A&s' width='30vh'></Image>
                                </Center>
                                <li> <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Data Acquisition Systems (DAQ) – </b> Precise tools for capturing and analyzing data across various applications.  </li>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1ZJwDo6YWT5yUeOxUoTpxl70qfg_5xIPuQ&s' width='30vh'></Image>
                                </Center>
                                <li> <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Infrared Detector Testing Systems – </b> Cutting-edge equipment for evaluating IR detectors with accuracy and efficiency.</li>

                                <Center m='xl'>
                                  <Image src='https://media.infratec.eu/sensor-division-infratec-detectors.png?mp_enc=dz0xMDAwJmZpdD1tYXgmZm09anBnJm1wX2Rpcj02NTE2NyZtcF9pZD0xNjUyMTgzNjk3' width='30vh'></Image>
                                </Center>
                                <li> <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Infrared Flare Systems – </b> Advanced systems engineered for IR countermeasure applications and testing.  </li>
                                <Center m='xl'>
                                  <Image src='https://www.advancedenergy.com/getattachment/49df6d4b-2184-4e79-841b-bd75b2f8bb79/flarespection-fr-wp.jpg' width='30vh'></Image>
                                </Center>
                              </ul>
                              We take pride in delivering systems that cater to diverse requirements, ensuring quality and performance in every product.</Text>

                          </div>

                        </Accordion.Panel>


                      </Accordion.Item>


                      <Accordion.Item mb="xl" value="PC-Add-on-Cards">
                        <Accordion.Control> PC Add-on Cards</Accordion.Control>

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>

                          <div style={{ marginTop: '2rem', }}>
                            <Text style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }} fw={700} fz={16.5}>Wide Range of PC Add-On Cards by Aaradhya Techno Solutions</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out" }}>Aaradhya Techno Solutions offers an extensive selection of PC add-on cards designed to meet diverse application requirements. Our portfolio includes advanced solutions for communication, data acquisition, and signal processing, tailored for high performance and reliability. </Text>
                            <Text fz={16.5} style={{ fontFamily: '"Marcellus", Sans-serif', alignContent: 'center', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                              <ol type='1' style={{ fontFamily: '"Open Sans", Sans-serif', paddingLeft: '0.5rem' }}>
                                <li>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>MIL-STD-1553B Cards</b></li>
                                <ul type='disc'>
                                  <li>Available in single-node and multi-node configurations.</li>
                                  <li>Supports PCI and PMC interfaces for seamless integration.</li>

                                </ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujZgrQTTdr-kDqR2lYobO1EhAXy6hxX_-SA&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Combo MIL-STD-1553B/ARINC 429/RS-422 Cards</b> <ul type='disc'>
                                  <li>Multi-function cards combining multiple communication standards in a single solution.</li>
                                </ul></li>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrHToufPhSwqySNN3PBeJLD1ubXzG9CijGQ&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>PCMCIA/Express MIL-STD-1553B Cards </b> </li>
                                <ul type='disc'><li>Compact and portable cards compatible with PCMCIA and Express interfaces for mobile applications.</li></ul>
                                <Center m='xl'>
                                  <Image src='https://cpimg.tistatic.com/08385556/b/4/PH1017-CL-Card.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>USB-Based MIL-STD-1553B Cards </b> </li>
                                <ul type='disc'><li>Convenient USB interface for plug-and-play functionality.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://www.ddc-web.com/resources/assets/images/_Products/_BU_67111U1.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>ARINC 429 Cards </b> </li>
                                <ul type='disc'><li>Specialized cards for aviation data communication systems.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://www.ddc-web.com/resources/assets/images/_Products/dd_40000k.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>RS-422/RS-485 Cards </b> </li>
                                <ul type='disc'><li>Reliable solutions for industrial serial communication applications.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://www.sunix.com/en/images/products/big/IPC-E2202S.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>ADC/DAC Cards </b> </li>
                                <ul type='disc'><li>High-performance analog-to-digital and digital-to-analog conversion cards for precision applications.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://www.ednasia.com/wp-content/uploads/sites/3/2021/09/LXD31K4-Feature-Image.jpg?w=600' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Multifunction DAQ Cards </b> </li>
                                <ul type='disc'><li>Versatile data acquisition cards designed to support multiple input/output functionalities.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://advdownload.advantech.com/productfile/PIS/GF-50HH/Category_Photo/PCIE-1800-Series20231128161451.png' width='30vh'></Image>
                                </Center>
                              </ol>
                              With a diverse range of add-on cards, Aaradhya Techno Solutions provides robust solutions to cater to the needs of industries including aerospace, defense, and industrial automation.</Text>

                          </div>

                        </Accordion.Panel>

                      </Accordion.Item>
                      <Accordion.Item mb="xl" value="bus-couplers">
                        <Accordion.Control>Bus Couplers and Accessories</Accordion.Control>

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>

                          <div style={{ marginTop: '2rem', }}>
                            <Text fw={700} fz={18} style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>Wide Range of Bus Couplers and Accessories from Aaradhya Techno Solutions</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }} >Aaradhya Techno Solutions offers a diverse selection of bus couplers and related components, designed to meet industry standards and ensure optimal performance. Our range includes :</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                              <ol type='1' style={{ paddingLeft: '0.5rem' }}>
                                <li>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Stub Couplers</b></li>
                                <ul type='disc'>
                                  <li>Options ranging from single stub to 8-stub configurations.</li>
                                  <li>Available in box-style or in-line models to suit various application needs.</li>

                                </ul>
                                <Center m='xl'>
                                  <Image src='https://www.milestek.com/media/catalog/product/cache/1a3273683a4ca3af81aeab556689f1e9/9/0/90-5012280-002.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Bus Switch Relays</b> <ul type='disc'>
                                  <li>High-performance relays for reliable and efficient bus switching.</li>
                                </ul></li>
                                <Center m='xl'>
                                  <Image src='https://www.milestek.com/media/catalog/product/cache/1a3273683a4ca3af81aeab556689f1e9/2/2/22641.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>MIL-STD-1553B Cable Assemblies </b> </li>
                                <ul type='disc'><li>Precision-engineered cable assemblies built to MIL-STD-1553B specifications for dependable connectivity.</li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaiO1RAYhcRzcv6ncQyRBCLJgZTtvXvve6A&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>MIL-STD-1553B Connectors</b> </li>
                                <ul type='disc'><li>Durable and robust connectors designed for MIL-STD-1553B systems, ensuring secure and consistent performance.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2swT808E2RRE081o-IPksgL2asaQwbF67sQ&s' width='30vh'></Image>
                                </Center>

                              </ol>
                              Aaradhya Techno Solutions is committed to providing high-quality solutions for bus coupling and connectivity across a variety of applications.</Text>

                          </div>

                        </Accordion.Panel>


                      </Accordion.Item>
                      <Accordion.Item mb="xl" value="electronics-and-electromechanical">
                        <Accordion.Control>Electronics and Electromechanical</Accordion.Control>

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>

                          <div style={{ marginTop: '2rem' }}>
                            <Text fw={700} fz={18} style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>Diverse Range of Electronic Components from Aaradhya Techno Solutions</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }} >Aaradhya Techno Solutions provides an extensive selection of high-quality electronic components, catering to commercial, industrial, and military applications. Our offerings include :</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 2.5s ease-out" : "slideInBottomToTop 2.5s ease-out", }}>
                              <ol type='1' style={{ paddingLeft: '0.5rem' }}>
                                <li>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Integrated Circuits (ICs)</b></li>
                                <ul type='disc'>
                                  <li>Available for commercial, industrial, and military-grade applications.</li>

                                </ul>
                                <Center m='xl'>
                                  <Image src='https://www.avaq.com/files/uploads/editor/b/20230616173549different-types-of-integrated-circuit.webp' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Chip Resistors</b> <ul type='disc'>
                                  <li>Reliable solutions for precise resistance in electronic circuits.</li>
                                </ul></li>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVByJMUH62HDxTetFT2cE3Xp02q1ToZpjUOA&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Inductors </b> </li>
                                <ul type='disc'><li>Wide variety for power and signal filtering applications.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYoHUqp_Y8YaaW3SJgHNQ_LswPikN-n2rKXg&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}> Capacitors </b> </li>
                                <ul type='disc'><li>High-performance capacitors for energy storage and filtering.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://bauaelectric.com/wp-content/uploads/2023/04/Capacitors_7189597135.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}> AC-DC Converters </b> </li>
                                <ul type='disc'><li>Efficient power conversion solutions.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQz5jUteCPwfqUFahjgTleOJl3Z9BxWcsr2Q&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>FPGAs </b> </li>
                                <ul type='disc'><li>Advanced programmable logic devices for versatile electronic design.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckBTi2JNkozrornNLfjk8d3eJW_bUwC7ohQ&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Diodes </b> </li>
                                <ul type='disc'><li>Comprehensive range of diodes for various circuit needs.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://www.matidavid.com/electronic_components/05_files/5-01.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Oscillators </b> </li>
                                <ul type='disc'><li>Precision oscillators for timing and frequency applications.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbOueyEhIVExX7cUGPjKh3XuSa4QQSAhV8w&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Cables and Cable Assemblies </b> </li>
                                <ul type='disc'><li>Durable and customizable solutions for connectivity.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdEdRMZzatIrfWbMr1B7kxySlIOZvPYJHBA&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Connectors </b> </li>
                                <ul type='disc'><li>High-quality connectors for secure and reliable connections.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFex6O-hPL-YxMZJZyK9WEBupOis1Gdw4yw&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Crimping Tools and Accessories </b> </li>
                                <ul type='disc'><li>Tools designed for efficient cable and connector assembly.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdMfkaNtoOhc5UF4p6VeLd546pWaTLrr5hMQ&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Circuit Breakers </b> </li>
                                <ul type='disc'><li>Protection devices for electrical systems.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJd8YMv-F8VDgYZ81pPGiV6fi05PG4qBQnAA&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Relays </b> </li>
                                <ul type='disc'><li>Robust relays for switching applications.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEUUx7eQdYCN8CBbhaB908yMsVjs685COPyMAY9guqsq90F83CnLKoUY-nz6qfxkDQGw0tPqhe-fsURmlhopfKUUxCsZOxDYW7fNS_haRwF41LD0tGDhi-PFkkTSHuUpkuH2yUKNoF8G2n/s1600/relay.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Switches </b> </li>
                                <ul type='disc'><li>Wide range of switches for various control needs.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://www.wago.com/medias/mm-172328-switche-2000x2000.jpg?context=bWFzdGVyfGltYWdlc3w0MDAxOTJ8aW1hZ2UvanBlZ3xhR0ZoTDJnMllpOHhNalF4TURZeE9EY3dOems1T0M5dGJTMHhOekl6TWpoZmMzZHBkR05vWlY4eU1EQXdlREl3TURBdWFuQm58YTJjYWIyMWM0ZjYzY2RhOTYxZjUwZjM3OTAyYzljOTQ1MDAyNTM4NDlkNzExMTBmNmMzNTJkYTUwMDk1MzAyYw' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Motors and Drives </b> </li>
                                <ul type='disc'><li>Reliable motors and drive systems for industrial automation and control.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNphx3fAXCoqEaQJ73MPA3slJW30ncHJhow&s' width='30vh'></Image>
                                </Center>
                              </ol>
                              With a diverse range of add-on cards, Aaradhya Techno Solutions provides robust solutions to cater to the needs of industries including aerospace, defense, and industrial automation.
                            </Text>

                          </div>

                        </Accordion.Panel>


                      </Accordion.Item>
                      <Accordion.Item mb="xl" value="software">
                        <Accordion.Control>Software</Accordion.Control>

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>

                          <div style={{ marginTop: '2rem' }}>
                            <Text fw={700} fz={18} style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>Software Solutions Offered by Aaradhya Techno Solutions</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>Aaradhya Techno Solutions delivers cutting-edge software solutions designed to enhance efficiency and productivity in various domains. Our offerings include :</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 2.5s ease-out" : "slideInBottomToTop 2.5s ease-out", }}>
                              <ol type='1' style={{ paddingLeft: '0.5rem' }}>
                                <li>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>CAE Data Reduction</b></li>
                                <ul type='disc'>
                                  <li>Tools for efficiently analyzing and condensing complex engineering data to streamline workflows and decision-making.</li>

                                </ul>
                                <Center m='xl'>
                                  <Image src='https://cdn.pixabay.com/photo/2014/08/14/10/38/software-417880_640.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>CAX Collaboration</b> <ul type='disc'>
                                  <li>Collaborative platforms enabling seamless integration of CAD, CAM, and CAE processes for improved teamwork and project coordination.
                                  </li>
                                </ul></li>
                                <Center m='xl'>
                                  <Image src='https://previews.123rf.com/images/kolobsek/kolobsek1210/kolobsek121000210/15557282-ilustraci%C3%B3n-3d-software-con-licencia-caja-con-un-disco-blando.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>High-Performance Visualization </b> </li>
                                <ul type='disc'><li>Advanced visualization software for processing and interpreting large-scale datasets with clarity and precision.</li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4d8yAvS3j9j5ap0zB8GrgGJx1hw2bmJZTp65dFXcQ4o2KGtckCYKjO6wALaF5Ss2oBQ&usqp=CAU' width='30vh'></Image>
                                </Center>

                              </ol>
                              Aaradhya Techno Solutions ensures that our software solutions meet the highest standards, supporting industries in achieving their goals with innovative and reliable tools.</Text>

                          </div>

                        </Accordion.Panel>

                      </Accordion.Item>

                      <Accordion.Item mb="xl" value="test-measurements">
                        <Accordion.Control>Test and Measurements</Accordion.Control>

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>

                          <div style={{ marginTop: '2rem', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "slideInBottomToTop 3s ease-out", }}>
                            <Text fw={700} fz={18} style={{ fontFamily: '"Marcellus", Sans-serif', }}>Measurement Devices Offered by Aaradhya Techno Solutions</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Marcellus", Sans-serif', }}>Aaradhya Techno Solutions provides a diverse array of measurement devices tailored to meet the needs of various industries. Our selection includes :</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 2.5s ease-out" : "slideInBottomToTop 2.5s ease-out", }}>
                              <ol type='1' style={{ paddingLeft: '0.5rem' }}>
                                <li>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Noise and Vibration Measurement Instruments</b></li>
                                <ul type='disc'>
                                  <li>Tools for precise monitoring and analysis of noise and vibration levels.</li>
                                </ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2eNAE4Cl5DSHyPt0rRjSBC_8GNppVo3sLRg&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Vibration Conditioning Monitoring Systems</b> <ul type='disc'>
                                  <li>Advanced solutions for assessing and maintaining equipment vibration health.</li>
                                </ul></li>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6po1xApW3femZFXsdHYXnilMCr-SpRNMZqw&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Data Acquisition and Capturing Systems </b> </li>
                                <ul type='disc'><li>Reliable systems for collecting and analyzing real-time data.</li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1ZJwDo6YWT5yUeOxUoTpxl70qfg_5xIPuQ&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Oscilloscopes</b> </li>
                                <ul type='disc'><li>High-performance devices for observing and analyzing electronic signals.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dMBY2HLK-pvUrGO3CuE8cxW_Kew7hnjRiQ&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Attenuators</b> </li>
                                <ul type='disc'><li>Devices designed for controlling signal amplitude across applications.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDUmNWDlfvQf45ku17IUn7dagf9fiVEASDQ&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Spectrum Analyzers</b> </li>
                                <ul type='disc'><li>Tools for frequency domain analysis, ideal for RF and microwave applications.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://www.keysight.com/content/dam/keysight/en/img/prd/scopes-analyzers-meters/spectrumanalyzers/spectrum_analyzer_family_1600x900.png' width='45vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Bench Power Supplies</b> </li>
                                <ul type='disc'><li>Stable and adjustable power sources for laboratory and testing environments.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://ik.imagekit.io/ulxd3enf7/wp-content/uploads/2023/02/30VDC-5A-Professional-Adjustable-Bench-Power-Supply1.png' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Environmental Testers</b> </li>
                                <ul type='disc'><li>Instruments for measuring environmental factors like temperature, humidity, and pressure.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSD7sXEtsQbMSGVw8Dl24rY3sgz3UiKBUhlw&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Signal Generators</b> </li>
                                <ul type='disc'><li>SDevices for generating accurate electronic signals for testing and calibration.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://tse2.mm.bing.net/th?id=OIP.GSySdd0NhFdbnZ7JTkeO8wHaGz&pid=Api&P=0&h=180' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Multimeters</b> </li>
                                <ul type='disc'><li>Versatile tools for measuring voltage, current, resistance, and other parameters.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://images-na.ssl-images-amazon.com/images/I/710DuFDPJ9L._AC_SL1500_.jpg' width='25vh'></Image>
                                </Center>

                              </ol>
                              Aaradhya Techno Solutions ensures access to high-quality measurement devices, empowering industries with precision and reliability.</Text>

                          </div>

                        </Accordion.Panel>

                      </Accordion.Item>
                      <Accordion.Item mb="xl" value="raw-materials">
                        <Accordion.Control>Raw Materials</Accordion.Control>

                        <Accordion.Panel style={{
                          maxHeight: "300px", // Limits height
                          backgroundColor: "#0A3E6D",
                          borderRadius: "5px",
                          padding: "10px",
                          overflow: 'hidden',
                          overflowY: 'scroll',
                        }}>

                          <div style={{ marginTop: '2rem', animation: isVisible ? "slideInBottomToTop 1.5s ease-out" : "slideInBottomToTop 1.5s ease-out", }}>
                            <Text fw={700} fz={18} style={{ fontFamily: '"Marcellus", Sans-serif', }}>Raw Material Solutions from Aaradhya Techno Solutions</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', }}>Aaradhya Techno Solutions supplies a diverse range of premium raw materials to cater to various industrial applications. Our offerings include :</Text>
                            <Text fz={16.5} style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 1.5s ease-out" : "slideInBottomToTop 1.5s ease-out", }}>
                              <ol type='1' style={{ paddingLeft: '0.5rem' }}>
                                <li>
                                  <b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Titanium Alloys</b></li>
                                <ul type='disc'>
                                  <li>Known for their lightweight, high strength, and excellent corrosion resistance, ideal for aerospace, medical, and industrial uses.</li>
                                </ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDf3nEtxhseDjxE3Vq71aELcqMz6HT9D6uA&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Nickel Alloys</b> <ul type='disc'>
                                  <li>High-performance alloys with superior resistance to heat and corrosion, suitable for extreme operational conditions.</li>
                                </ul></li>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOveezEl8kYlDNyujgKCY-ajuCQPw1VelgA&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Stainless Steel </b> </li>
                                <ul type='disc'><li>A versatile and durable material with excellent strength and resistance to rust, widely used in construction and manufacturing.</li></ul>
                                <Center m='xl'>
                                  <Image src='https://lirp.cdn-website.com/148e76ca/dms3rep/multi/opt/CustomManufacturing-PolishingInc-99209-Stainless-Steel-Different-blogbanner1-1920w.jpg' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Alloy Structural Steels</b> </li>
                                <ul type='disc'><li>Designed for enhanced mechanical properties, providing superior strength and durability for structural applications.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBh2mQZ26kNWY8I7lCWKoxHdWo8cU4YRl4w&s' width='30vh'></Image>
                                </Center>
                                <li><b style={{ fontFamily: '"Marcellus", Sans-serif' }}>Copper Alloys</b> </li>
                                <ul type='disc'><li>Renowned for excellent electrical and thermal conductivity, used extensively in electrical and industrial sectors.
                                </li></ul>
                                <Center m='xl'>
                                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMORKD2f9W2VnwwZfLp9EtxDn_bh6yyALPw&s' width='30vh'></Image>
                                </Center>


                              </ol>
                              Aaradhya Techno Solutions is committed to delivering high-quality raw materials that meet the stringent demands of modern industries.</Text>

                          </div>

                        </Accordion.Panel>
                      </Accordion.Item>

                    </Accordion>

                  </Card>
                </div>
              </Grid.Col>
            </Grid>
          </Container>
        </div>
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

export default ProductMobile;
