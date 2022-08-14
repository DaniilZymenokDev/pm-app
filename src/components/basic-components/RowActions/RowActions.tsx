import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './RowActions.module.scss'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const options = [
    {
        name: 'Edit',
        icon: <EditIcon/>
    },
    {
        name: 'Delete',
        icon: <DeleteIcon/>
    }
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setTimeout(() => setAnchorEl(null), 1000);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleClick}
                onMouseLeave={handleClose}
                className={styles.iconButton}
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                className={styles.menuList}
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '50px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem className={styles.menuItem} key={option.name} onClick={handleClose}>
                        <IconButton>
                            {option.icon}
                        </IconButton>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}