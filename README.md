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
**Success Criteria:**
- Users can start a task, quit the app, and pick up where they left off

## Submission Guidelines
1. Fork this repository to your personal GitHub account
2. Make your repository **private**
3. Complete your solution in your private fork
4. Add `@jeffreysilver` as a collaborator when ready to submit
5. Email Jeff with the link to your private repository


**What to Include:**
- Complete working code
- `SOLUTION.md` documenting your approach and any tradeoffs you encountered.

## Time Expectation

This is designed as a 3-4 hour take-home assignment. Focus on:
- Core functionality over perfect polish
- Showing your problem-solving approach either through commit history or in your SOLUTION.md

## Using AI
You are allowed and encouraged to use AI to complete this task. We love AI and use it to do a significant chunk of coding at Opus. Please include specific details on how you used AI to complete this task in your SOLUTION.md file. We are curious to know which tools you use, and which models performed better than others.

## Questions?
Reach out to Jeff!

Good luck! 🚀
