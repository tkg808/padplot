import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabsGroup from './TabsGroup';

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

const testTabs = [
  { title: "tab1", linkPath: "/home/overview", barLeft: 0, barSize: 62 },
  { title: "tab2", linkPath: "/home/overview", barLeft: 0, barSize: 62 },
  { title: "tab3", linkPath: "/home/overview", barLeft: 0, barSize: 62 },
];

describe("TabsGroup renders", () =>
{
  test("renders all tabs and TabBar", async () =>
  {
    render(
      <Router>
        <TabsGroup
          tabsList={testTabs}
          currTab={testTabs[0]}
          setCurrTab={() => { }} />
      </Router>
    );

    expect(screen.getByTestId("tabs-group-container").children).toHaveLength(testTabs.length + 1);
  })
})