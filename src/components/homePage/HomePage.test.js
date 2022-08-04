import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

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

describe("HomePage renders", () =>
{
  test("overview tab renders", async () =>
  {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    expect(screen.getByText("Overview")).toHaveClass("home-page-tab");
  })

  test("recent tab renders", async () =>
  {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    expect(screen.getByText("Recent")).toHaveClass("home-page-tab");
  })

  test("new project button renders", async () =>
  {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    const newProjectButton = await screen.findByText("New Project", { exact: false });
    expect(newProjectButton).toHaveClass("home-page-new-project-button");
  })
})