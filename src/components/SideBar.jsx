import createTypography from '@mui/material/styles/createTypography'
import { Stack } from '@mui/system'
import React from 'react'
import { categories } from '../utils/constants/constant'




const Sidebar = ({selected, setSelectedCategory}) => (
    <Stack direction="row"
    sx={{overflowY: "auto",
    height: {sx:"auto", md: "95%"},
    flexDirection: {md:"column", sx:"row"}
    }}
    >
        {categories.map( (category) => (
            <button className="category-btn"
            onClick={() => setSelectedCategory(category.name)} key={category.name}
            style={{background: category.name === selected && "#f70248", color: "white"}}
            >
                <span style={{color: category.name === selected ? "white": "#f70248", marginRight: "15px"}}>{category.icon}</span>
                <span style={{opacity: category.name === selected ? "1" : "0.8"}}>{category.name}</span>
            </button>
        ))}
        </Stack>
  )

export default Sidebar