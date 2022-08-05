import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationsPage from './NotificationsPage';

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

describe("NotificationsPage renders", () =>
{
  test("overview tab renders", async () =>
  {
    render(
      <Router>
        <NotificationsPage />
      </Router>
    );

    const overviewTab = screen.getByText("Overview");
    expect(overviewTab).toHaveClass("page-tab");
  })

  test("messages tab renders", async () =>
  {
    render(
      <Router>
        <NotificationsPage />
      </Router>
    );

    const messagesTab = screen.getByText("Messages");
    expect(messagesTab).toHaveClass("page-tab");
  })
})