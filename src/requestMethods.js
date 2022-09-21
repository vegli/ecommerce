import axios from 'axios';


const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmFlMjNiMzQzZjc0ZDJmMDdhZWI0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mzc5MDYzNCwiZXhwIjoxNjY0MTM2MjM0fQ.xRsw0F4PS4r3pC8mvfa4i57ZC3SNa_ekS2kVngiqu14";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});