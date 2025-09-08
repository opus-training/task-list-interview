# Task Management App - Senior React Native Interview

## Overview

This is a React Native task management application built with Expo. The app allows users to complete inspection tasks with various input types (text, numbers, checkboxes, multiple choice) and photo uploads.

**Your mission:** Optimize the app's performance and add offline-first capabilities.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

3. Open the app in:
   - iOS Simulator (press `i`)
   - Android Emulator (press `a`)
   - Expo Go app on your device (scan QR code)

## Current Architecture

- **`app/index.tsx`** - Task list screen
- **`app/task-form.tsx`** - Task completion form (main focus)
- **`data/`** - Mock task data (short task: 5 steps, long task: 200 steps)
- **`types/types.ts`** - TypeScript interfaces

## Your Tasks

### 🚀 Task 1: Performance Optimization (Required)

**Problem:** The task form becomes extremely slow with the long task (200 steps). Users experience:
- Slow initial render
- Laggy scrolling
- UI freezes during interactions
- High memory usage

**Your Goal:** Make the form performant for 200+ steps

**Success Criteria:**
- Form loads quickly regardless of step count
- Smooth scrolling through all steps
- Responsive UI during user interactions
- Measurable performance improvements

### 📱 Task 2: Offline-First Capabilities (Required)

**Problem:** Users often work in areas with poor connectivity but need to complete tasks.

**Your Goal:** Enable full offline functionality
**User Stories:**
- As a user, I can start a task, quit the app, and pick up where I left off

## Submission Guidelines
Submit your complete solution by creating a pull request in this repo. Email Jeff when you are done!

## Time Expectation

This is designed as a 3-4 hour take-home assignment. Focus on:
- Core functionality over perfect polish
- Demonstrating senior-level thinking
- Showing your problem-solving approach

## Questions?
Reach out to Jeff!

Good luck! 🚀
