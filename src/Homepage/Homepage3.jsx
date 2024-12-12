import React from "react";
import { Text, Card, Container, Grid, Accordion } from "@mantine/core";
import { MdMiscellaneousServices } from "react-icons/md";
import { LuLayers } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


const Homepage3 = () => {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(`/product/${path}`
      

    );
  };

 const handleNavigation1 = (path) => {
    navigate(`/service/${path}`
      

    );
  };



  return (
    <div style={{ backgroundColor: "black", padding: "2rem 0" }}>
      <Container mt="3rem" mb="3rem">
        <Text
          align="center"
          size="2rem"
          weight={700}
          style={{
            color: "white",
            marginBottom: "3rem",
            fontSize: "3rem",
          }}
        >
          Our Key Offerings
        </Text>

        <Grid justify="space-around" align="center" mt="5rem">
          {/* Products Accordion */}
          <Grid.Col md={6} lg={5}>
            <div style={{ position: "relative", marginBottom: "2rem" }}>
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
                <Text size="1.7rem" pt="2rem" style={{ textAlign: "center" }} weight={600}>
                  Products
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
                    <Accordion.Control onClick={() => handleNavigation("Systems")}>
                      Systems
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="pc-add-on-cards">
                    <Accordion.Control onClick={() => handleNavigation("PC%20Add-on%20Cards")}>
                      PC Add-on Cards
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="bus-couplers">
                    <Accordion.Control onClick={() => handleNavigation("Bus%20Couplers%20and%20Accessories")}>
                      Bus Couplers and Accessories
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="electronics">
                    <Accordion.Control onClick={() => handleNavigation("Electronics%20and%20Electromechanical")}>
                      Electronics and Electromechanical
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="software">
                    <Accordion.Control onClick={() => handleNavigation("Software")}>
                      Software
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="test-measurements">
                    <Accordion.Control onClick={() => handleNavigation("Test%20and%20Measurements")}>
                      Test and Measurements
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item value="raw-materials">
                    <Accordion.Control onClick={() => handleNavigation("Raw%20Materials")}>
                      Raw Materials
                    </Accordion.Control>
                  </Accordion.Item>
                </Accordion>
              </Card>
            </div>
          </Grid.Col>

        
          <Grid.Col md={6} lg={5}>
            <div style={{ position: "relative", marginBottom: "2rem" }}>
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
                h='32rem'
                style={{
                  backgroundColor: "#0168CB59",
                  color: "white",
                  position: "relative",
                }}
              >
                <Text size="1.7rem" pt="2rem" style={{ textAlign: "center" }} weight={600}>
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
                    <Accordion.Control onClick={() => handleNavigation1("Embedded%20Design")}>
                      Embedded Design
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item mb='xl' value="reverse-engineering">
                    <Accordion.Control onClick={() => handleNavigation1("Reverse%20Engineering")}>
                      Reverse Engineering
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item mb='xl' value="product-engineering">
                    <Accordion.Control onClick={() => handleNavigation1("Product%20Engineering")}>
                      Product Engineering
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item mb='xl'  value="rf-design">
                    <Accordion.Control onClick={() => handleNavigation1("RF%20and%20Microwave%20Design")}>
                      RF and Microwave Design
                    </Accordion.Control>
                  </Accordion.Item>
                  <Accordion.Item mb='xl'  value="pcb-design">
                    <Accordion.Control onClick={() => handleNavigation1("PCB%20Design%20and%20Analysis")}>
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
