import React, { useState } from "react";
import styled from "styled-components";
import { counts } from "../utils/data";
import CountsCard from "../Cards/CountsCard";
import WeeklyStat from "../Cards/WeeklyStatCard";
import CategoryChart from "../Cards/CategoryChart";
import AddWorkout from "../components/AddWorkouts";
import WorkoutCard from "../Cards/WorkoutCard";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.h2`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

function Dashboard() {
  const [workout, setWorkout] = useState("");

  const data = {
    totalCaloriesBurnt: 1500,
    totalWorkouts: 6,
    avgCaloriesBurntPerWorkout: 2250,
    totalWeeksCaloriesBurnt: {
      weeks: ["17th", "18th", "19th"],
      caloriesBurned: [10500, 0, 0],
    },
    pieChartData: [
      { id: 0, value: 6000, label: "Legs" },
      { id: 0, value: 700, label: "Back" },
      { id: 0, value: 3000, label: "Chest" },
    ],
  };
  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
          {counts.map((item) => (
            <CountsCard item={item} data={data} />
          ))}
        </FlexWrap>

        <FlexWrap>
          <WeeklyStat data={data} />
          <CategoryChart data={data} />
          <AddWorkout workout={workout} setWorkout={setWorkout} />
        </FlexWrap>

        <Section>
          <Title>Today Workouts</Title>
          <CardWrapper>
            <WorkoutCard workout={{}} />
          </CardWrapper>
        </Section>
      </Wrapper>
    </Container>
  );
}

export default Dashboard;
