import { API_URL } from '@/config/api.config'
import axios from 'axios'
import { getContentType } from './helpers'

const axiosOptions = {
	baseURL: API_URL,
	headers: getContentType(),
}

export const axiosClassic = axios.create(axiosOptions)
