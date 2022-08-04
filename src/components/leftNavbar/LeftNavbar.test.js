import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LeftNavbar from './LeftNavbar';

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

describe("LeftNavbar renders", () =>
{
  test("logo renders", async () =>
  {
    render(
      <Router>
        <LeftNavbar />
      </Router>
    );

    expect(screen.getByAltText("left-nav-logo")).toHaveClass("left-nav-logo");
  })

  test("four icons render", async () =>
  {
    render(
      <Router>
        <LeftNavbar />
      </Router>
    );

    const iconContainer = screen.getByTestId("left-nav-top-icon-container");
    expect(iconContainer.children).toHaveLength(4);
  })

  test("pill container renders", async () =>
  {
    render(
      <Router>
        <LeftNavbar />
      </Router>
    );

    const pillContainer = screen.getByTestId("left-nav-pill-container");
    expect(pillContainer.children).toHaveLength(2);
  })
})