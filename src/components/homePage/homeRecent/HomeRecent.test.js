import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeRecent from './HomeRecent';

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

describe("HomeRecent renders", () =>
{
  test("tells user there are no projects", async () =>
  {
    render(
      <Router>
        <HomeRecent />
      </Router>
    );

    const header = screen.getByText("projects", { exact: false });
    expect(header).toHaveClass("home-recent-projects-container");
  })
})