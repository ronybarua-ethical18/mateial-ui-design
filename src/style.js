import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor:theme.palette.background.paper,
        padding:theme.spacing(8, 0 ,6)
    },
    icon:{
        marginRight: '20px'
    },
    button:{
        marginTop: '20px'
    },
    cardGrid:{
        padding: '20px 0'
    },
    card:{
       
        display:'flex',
        height:'100%',
        flexDirection: 'column'
    },
    cardMedia:{
        paddingTop: '56.25%' //16:9
    },
    cardContent:{
        flexGrow: 1
    },
    footer:{
        backgroundColor:theme.palette.background.paper,
        padding: '20px 0'
    },
    pageMeasure:{
        width:'90%',
        margin: 'auto'
    }
}))
export default useStyles;