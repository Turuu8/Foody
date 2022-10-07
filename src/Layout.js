import { Box } from '@mui/material'
import { Navbar, Sidebar } from './component/navbar-sidebar'

export const Layout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar />
            <Sidebar />
            <Box>
                
            </Box>
        </Box>
    )
}