import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { findByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RightNavbar from './RightNavbar';

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

describe("RightNavbar renders", () =>
{
  test("logo renders", async () =>
  {
    render(
      <Router>
        <RightNavbar />
      </Router>
    );

    expect(screen.getByAltText("right-nav-logo")).toHaveClass("right-nav-logo");
  })

  test("button renders", async () =>
  {
    render(
      <Router>
        <RightNavbar />
      </Router>
    );

    const premiumButton = await screen.findByText("unlimited", { exact: false });
    expect(premiumButton).toHaveClass("right-nav-premium-button");
  })

  test("search form renders", async () =>
  {
    render(
      <Router>
        <RightNavbar />
      </Router>
    );

    const searchForm = await screen.getByTestId("right-nav-search-form");
    expect(searchForm.children).toHaveLength(3);
  })

  test("two sections render", async () =>
  {
    render(
      <Router>
        <RightNavbar />
      </Router>
    );

    const newsHeader = await screen.findAllByTestId("right-nav-section");
    expect(newsHeader).toHaveLength(2);
  })
})