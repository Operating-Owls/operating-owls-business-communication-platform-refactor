import * as React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { TagIcon, DeleteIcon } from '@mui/icons-material';

// import { useMyContext } from '../DataContext';
IndivChannel.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    deleteChannel: PropTypes.func.isRequired
};

//component for each individual channel
export default function IndivChannel(props){
    
    // const {serverData} = useMyContext();
    const [serverRole, setServerRole] = React.useState("admin"); // FIXME: Get real role data
    console.log('Selected:', props.selected);
    const deleteFunction = ((serverRole === "admin") ? (
    
    <IconButton
    edge="end"
    aria-label="deleteChannel"
    className="hover-visible"
    onClick={() => props.deleteChannel(props.id)}>
        <DeleteIcon />
    </IconButton>) : null);


    return (
        <>
        {/* Shows delete button based on hover*/}
        <ListItem 
            
            sx={{
                '&:hover .hover-visible': {
                    display: 'block',
                },
                '& .hover-visible': {
                    display: 'none',
                },
            }}
            
            secondaryAction = {
                deleteFunction
            }
            disablePadding
        > 
            <ListItemButton 
                sx={{ pl: 4 }} 
                {...props}
                
            >
            {/* More visual effects for channel display*/}
                <ListItemIcon>
                    <TagIcon />
                </ListItemIcon>
                <ListItemText primary={`${props.name}`} />
            </ListItemButton>
           
        </ListItem>
            

        </>
    )
}
