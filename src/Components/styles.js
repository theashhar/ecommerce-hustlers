import { makeStyles } from '@mui/styles';


// import { makeStyles, } from 'tss-react/mui'
// import { ThemeProvider } from '@mui/material/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space',
}
}));