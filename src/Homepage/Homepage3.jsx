import React from "react";
import { Text, Card, Container, Grid, Accordion } from "@mantine/core";
import { MdMiscellaneousServices } from "react-icons/md";
import { LuLayers } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "@mantine/hooks";


const Homepage3 = () => {

  const sectionRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const navigate = useNavigate();
  const handleNavigation = (path, event) => {
    const defaultValue = path === "Systems" ? "systems" :
      path === "PC-Add-on-Cards" ? "PC-Add-on-Cards" :
        path === "Bus-Couplers-and-Accessories" ? "bus-couplers" :
          path === "Electronics-and-Electromechanical" ? "electronics-and-electromechanical" :
            path === "Software" ? "software" :
              path === "Test-and-Measurements" ? "test-measurements" :
                path === "Raw-Materials" ? "raw-materials" : null;
    if (isMobile) {
      event.stopPropagation();
      navigate("/product", { state: { defaultAccordionValue: defaultValue } });
    } else {
      navigate(`/product/${path}`);
    }
  };

  const handleNavigation1 = (path, event) => {
    const defaultValue = path === "Embedded-Design" ? "embedded-design" :
      path === "Reverse-Engineering" ? "reverse-engineering" :
        path === "Product-Engineering" ? "product-engineering" :
          path === "RF-and-Microwave-Design" ? "rf-design" :
            path === "PCB-Design-and-Analysis" ? "pcb-design" : null;
    if (isMobile) {
      event.stopPropagation();
      navigate("/service", { state: { defaultAccordionValue: defaultValue } });
    } else {
      navigate(`/service/${path}`);


    }
  };



  return (
    <div ref={sectionRef} style={{ backgroundColor: "black", padding: "2rem 0", }}>
      <Container mb="3rem">
        <Text
          align="center"
          size="2rem"
          weight={700}
          mt={isMobile?'none': 'xl'}
          style={{
            color: "white",
            marginBottom: "3rem",
            fontSize:isMobile?'2rem': "3rem",
            fontFamily: '"Marcellus", Sans-serif',
            animation: isVisible ? "slideInBottomToTop 3.5s ease-out" : "none",
          }}
        >
          Our Key Offerings
        </Text>

        <Grid justify="space-around" align="center" mt="5rem" gutter={isMobile ? 'xl' : '4rem'}>
          {/* Products Accordion */}
          <Grid.Col md={6} lg={5}>
            <div style={{ position: "relative", marginBottom: "2rem", animation: isVisible ? "slideInLeftToRight  3.5s ease-out" : "none", }}>
              <div
                style={{
                  position: "absolute",
                  top: "-42px",
                  left: "50%",
                  width: "7rem",
                  height: "4rem",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                  backgroundColor: "#007ACC",
                  borderRadius: "1rem",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.7)",
                }}
              >
                <LuLayers size={55} color="white" />
              </div>

              <Card
                shadow="md"
                padding="xl"
                radius="md"
                style={{
                  backgroundColor: "#0168CB59",
                  color: "white",
                  position: "relative",

                }}
              >
                <Text size="1.7rem" pt="2rem" style={{ textAlign: "center", fontFamily: '"Marcellus", Sans-serif', }} weight={600}>
                  Products
                </Text>
                <Accordion
                  chevron={<IoIosArrowForward />}
                  variant="default"
                  style={{ marginTop: "1rem", color: "white", }}
                  styles={{
                    item: {
                      borderBottom: "none",
                      color: "white",
                      backgroundColor: "transparent",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      }
                    },
                    control: {
                      color: "white",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "white",
                      },
                    },
                  }}
                >
                  <Accordion.Item value="systems">
                    <Accordion.Control onClick={(event) => handleNavigation("Systems", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      Systems
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="pc-add-on-cards">
                    <Accordion.Control onClick={(event) => handleNavigation("PC-Add-on-Cards", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      PC Add-on Cards
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="bus-couplers">
                    <Accordion.Control onClick={(event) => handleNavigation("Bus-Couplers-and-Accessories", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      Bus Couplers and Accessories
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="electronics">
                    <Accordion.Control onClick={(event) => handleNavigation("Electronics-and-Electromechanical", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      Electronics and Electromechanical
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="software">
                    <Accordion.Control onClick={(event) => handleNavigation("Software", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      Software
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="test-measurements">
                    <Accordion.Control onClick={(event) => handleNavigation("Test-and-Measurements", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      Test and Measurements
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item
                    value="raw-materials">
                    <Accordion.Control onClick={(event) => handleNavigation("Raw-Materials", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      Raw Materials
                    </Accordion.Control>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </div>
          </Grid.Col>


          <Grid.Col md={6} lg={5}>
            <div style={{ position: "relative", marginBottom: "2rem", animation: isVisible ? "slideInLeftToRight  3.5s ease-out" : "none", }}>
              <div
                style={{
                  position: "absolute",
                  top: "-42px",
                  left: "50%",
                  width: "7rem",
                  height: "4rem",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                  backgroundColor: "#007ACC",
                  borderRadius: "1rem",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.7)",

                }}
              >
                <MdMiscellaneousServices size={55} color="white" />
              </div>

              <Card
                shadow="md"
                padding="xl"
                radius="md"
                h='33rem'
                style={{
                  backgroundColor: "#0168CB59",
                  color: "white",
                  position: "relative",
                }}
              >
                <Text size="1.7rem" pt="2rem" style={{ textAlign: "center", fontFamily: '"Marcellus", Sans-serif', }} weight={600}>
                  Services
                </Text>
                <Accordion
                  chevron={<IoIosArrowForward />}
                  variant="default"
                  style={{ marginTop: "1rem", color: "white" }}
                  styles={{
                    item: {
                      borderBottom: "none",
                      color: "white",
                      backgroundColor: "transparent",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",

                      }
                    },
                    control: {
                      color: "white",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "white",
                      },
                    },
                  }}
                >
                  <Accordion.Item mb='xl' value="embedded-design">
                    <Accordion.Control onClick={(event) => handleNavigation1("Embedded-Design", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      Embedded Design
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item mb='xl' value="reverse-engineering">
                    <Accordion.Control onClick={(event) => handleNavigation1("Reverse-Engineering", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      Reverse Engineering
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item mb='xl' value="product-engineering">
                    <Accordion.Control onClick={(event) => handleNavigation1("Product-Engineering", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      Product Engineering
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item mb='xl' value="rf-design">
                    <Accordion.Control onClick={(event) => handleNavigation1("RF-and-Microwave-Design", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      RF and Microwave Design
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item mb='xl' value="pcb-design">
                    <Accordion.Control onClick={(event) => handleNavigation1("PCB-Design-and-Analysis", event)} style={{ fontfamily: '"Open Sans", Sans-serif', }}>
                      PCB Design and Analysis
                    </Accordion.Control>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Homepage3;
