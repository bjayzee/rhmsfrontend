"use client";

import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";
import styled from "styled-components";

const { TabPane } = Tabs;

const AccessoriesManagement = (props) => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      const res = await fetch("/api/accessories");
      const data = await res.json();
      setAccessories(data);
    };

    fetchAccessories();
  }, []);

  console.log(accessories);

  return (
      <div className="my-[100px]">
        <div className="mx-[50px]">
          <PageHeader title="Accessories" />

          <StyledDiv {...props}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="IPhones" key="1">
              </TabPane>
              <TabPane tab="IWatches" key="2">
              </TabPane>
              <TabPane tab="IPads" key="3">
              </TabPane>{" "}
              <TabPane tab="Mac" key="4">
              </TabPane>
              <TabPane tab="Airpods" key="5">
              </TabPane>
            </Tabs>
          </StyledDiv>
        </div>
      </div>
  );
};

export default AccessoriesManagement;

const StyledDiv = styled.div`
  margin-orders: 1rem;
  padding: 0 0.5rem;
`;
