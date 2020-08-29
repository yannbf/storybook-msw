import React from 'react'
import { Github } from '../components/Github'

export default {
  title: 'Github',
  component: Github,
}

export const Default = () => <Github />

export const Mocked = () => <div>
  <p>Click below to make a non-mocked request</p>
  <Github username="mocked" />
</div>

export const NotFound = () => <Github username="wrong" />
