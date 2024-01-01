import axios from 'axios'

import { type UserInterface } from '@/interfaces'

import { endpointUrl } from '@/constants'

export const fetchUsers = async () => {
  const response = await axios.get(`${endpointUrl}/users`)
  return (await response.data) as UserInterface[]
}
