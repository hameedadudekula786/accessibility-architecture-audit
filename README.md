# Accessibility Baseline & Repository Architecture Audit

## Project Overview

This project audits a public-facing website for accessibility and establishes a basic repository architecture for future development.

## Website Audited

GOV.UK — https://www.gov.uk/

## Audit Methods

* Google Chrome Lighthouse accessibility audit
* Manual keyboard navigation testing
* Documentation of observed issues and proposed fixes

## Repository Structure

```text
accessibility-project/
├── client/
├── server/
├── docs/
│   └── accessibility-audit.md
├── screenshots/
└── test/
```

## Folder Responsibilities

* **client:** Frontend user interface.
* **server:** Backend application and API logic.
* **docs:** Audit report and project documentation.
* **screenshots:** Evidence collected during the audit.
* **test:** Test cases and testing files.

## Local Setup

1. Install Git and Node.js.
2. Open the project folder in VS Code.
3. Review the audit report in `docs/accessibility-audit.md`.
4. Review the screenshots in `screenshots/`.

## First Vertical Feature Slice

The first feature slice will be an accessible page that displays information from the server.

* Client: Displays information to the user.
* Server: Provides information through an API.
* Test: Verifies that the API and page work correctly.
* Accessibility: Supports keyboard navigation and visible focus.

## Expected Outcome

A documented accessibility audit, supporting screenshots, and a repository structure ready for future client and server development.
