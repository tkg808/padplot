import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeOverview from './HomeOverview';

let container = null;

beforeEach(() =>
{
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() =>
{
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("HomeOverview renders", () =>
{
  test("plan card renders", async () =>
  {
    render(
      <Router>
        <HomeOverview />
      </Router>
    );

    const planCard = screen.getByText("Plan", { exact: false });
    expect(planCard).toHaveClass("card-title-bold");
  })

  test("design card renders", async () =>
  {
    render(
      <Router>
        <HomeOverview />
      </Router>
    );

    const designCard = screen.getByText("Design", { exact: false });
    expect(designCard).toHaveClass("card-title-bold");
  })

  test("build card renders", async () =>
  {
    render(
      <Router>
        <HomeOverview />
      </Router>
    );

    const buildCard = screen.getByText("Build", { exact: false });
    expect(buildCard).toHaveClass("card-title-bold");
  })

  test("home value report renders", async () =>
  {
    render(
      <Router>
        <HomeOverview />
      </Router>
    );

    const homeReport = screen.getByText("Total home value");
    expect(homeReport).toHaveClass("home-overview-report-total-home-value-title");
  })

  test("budget renders", async () =>
  {
    render(
      <Router>
        <HomeOverview />
      </Router>
    );

    const homeBudget = screen.getByText("Budget", { exact: false });
    expect(homeBudget).toHaveClass("home-overview-budget-title-container");
  })

  test("project tracker renders", async () =>
  {
    render(
      <Router>
        <HomeOverview />
      </Router>
    );

    const projectTracker = screen.getByText("Project tracker", { exact: false });
    expect(projectTracker).toHaveClass("home-overview-tracker-header-title-container");
  })
})