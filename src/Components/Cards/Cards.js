import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
    List,
    ListItem,
    ListItemText
} from "@mui/material"
function Cards(
    {
        component_one,
        component_two,
        height,
        width,
        image,
        variant_one,
        variant_two,
        typographyContent_one,
        typographyContent_two,
        color,
        primary_one,
        primary_two,
        primary_three,
        primary_four,
        secondary_two,
        secondary_three,
        secondary_four,
        size,
        buttonContent_one,
        buttonContent_two
    }
) {
    return (
        <div>
            {/* MAIN */}
            <Box width={width}>
                <Card>
                    <CardMedia
                        component={component_one}
                        height={height}
                        image={image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant={variant_one} component={component_two}>
                            {typographyContent_one}
                        </Typography>
                        <Typography variant={variant_two} color={color}>
                            {typographyContent_two}
                        </Typography>
                        <Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary={primary_one} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={primary_two} secondary={secondary_two} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={primary_three} secondary={secondary_three} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={primary_four} secondary={secondary_four} />
                                </ListItem>
                            </List>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size={size}>{buttonContent_one}</Button>
                        <Button size={size}>{buttonContent_two}</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>

    )
}

export default Cards