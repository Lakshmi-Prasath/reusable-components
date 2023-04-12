import './App.css';
import { Avatar, Stack, AvatarGroup, Button } from '@mui/material';
import Alerts from './Components/Alerts/Alerts';
import MuiAvatar from './Components/Avatar/Avatar';
import MuiButton from './Components/Buttons/Button';
import BtnGroup from './Components/Buttons/BtnGroup';
import Cards from './Components/Cards/Cards';
import Chips from './Components/Chips/Chips';
import FaceIcon from '@mui/icons-material/Face';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import ToggleGrp from './Components/Buttons/ToggleGrp';
import ToggleBtn from './Components/Buttons/ToggleBtn';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function App() {
  const cardData = {
    component_one: "img",
    component_two: 'div',
    height: "240",
    width: "300px",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brihadeeswara_Temple_Gopuram_at_Night.jpg",
    variant_one: "h5",
    variant_two: "body2",
    typographyContent_one: "Thanjai Periya Kovil",
    typographyContent_two: "The Great Living Chola Temples is a UNESCO World Heritage Site designation for a group of Chola dynasty era Hindu temples in the Indian state of Tamil Nadu. Completed between early 11th and the 12th century CE.",
    color: "text.secondary",
    primary_one: "The monuments include:",
    primary_two: "Brihadisvara Temple",
    primary_three: "Brihadisvara Temple",
    primary_four: "Airavatesvara Temple",
    secondary_two: "at Thanjavur",
    secondary_three: "at Gangaikonda Cholapuram",
    secondary_four: "at Kumbakonam",
    size: "small",
    buttonContent_one: "Share",
    buttonContent_two: "like"
  }
  const avatarData = {
    one: {
      text: "ONE",
      bgcolor: "primary.light",
      width: 60,
      height: 60
    },
    two: {
      text: "TWO",
      bgcolor: "success.light",
      width: 60,
      height: 60,
      variant: "rounded"
    },
    three: {
      src: "https://m.media-amazon.com/images/M/MV5BZWJlODhlMzctOTU0Yi00MTUwLTkxODYtMDNjNTQxYTI2YTE1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      alt: "Vijay",
    },
    four: {
      src: 'https://igimages.gumlet.io/tamil/home/lokesh-salmankhan1972022m2.jpg?w=376&dpr=2.6',
      alt: "Loki",
    }


  }
  const buttonData = {
    one: {
      buttonData: "Prasath",
      variant: 'text',
      href: 'https://mui.com/material-ui/react-button/',
      color: "primary"
    },
    two: {
      buttonData: "contained",
      variant: 'contained'
    },
    three: {
      buttonData: "outlined",
      variant: 'outlined'
    },
    four: {
      buttonData: "primary",
      variant: 'contained',
      color: "primary"
    },
    five: {
      buttonData: "secondary",
      variant: 'text',
      color: "secondary"
    },
    six: {
      buttonData: "info",
      variant: 'contained',
      color: "info"
    },
    seven: {
      buttonData: "error",
      variant: 'contained',
      color: "error"
    },
    eight: {
      buttonData: "warning",
      variant: 'contained',
      color: "warning"
    },
    nine: {
      buttonData: "success",
      variant: 'contained',
      color: "success"
    },
    small: {
      buttonData: "small",
      variant: 'contained',
      size: "small"
    },
    medium: {
      buttonData: "medium",
      variant: 'contained',
      size: "medium"
    },
    large: {
      buttonData: "large",
      variant: 'contained',
      size: "large"
    },
    startIcon: {
      buttonData: "start Icon",
      variant: 'contained',
      startIcon: (< SendIcon />)
    },
    endIcon: {
      buttonData: "End Icon",
      variant: 'contained',
      endIcon: (<SendIcon />)
    },
    btnLeft: {
      buttonData: "Left"

    },
    btnCenter: {
      buttonData: "Center"
    },
    btnRight: {
      buttonData: "Right"
    }
  }

  const formatIcon = {
    bold: {
      value: "bold",
      ariaLabel: 'bold',
      formatIcon: (<FormatBoldIcon />)
    },
    italic: {
      value: "italic",
      ariaLabel: 'italic',
      formatIcon: (<FormatItalicIcon />)
    },
    underlined: {
      value: "underlined",
      ariaLabel: 'underlined',
      formatIcon: (<FormatUnderlinedIcon />)
    },
  }
  const alertData = {
    one: {
      severity: 'error',
      alertTitle: "error",
      alertData: " This is an error alert"
    },
    two: {
      severity: 'warning',
      alertTitle: "warning",
      alertData: " This is an warning alert"
    },
    three: {
      severity: 'info',
      alertTitle: "info",
      alertData: " This is an info alert"
    },
    four: {
      severity: 'success',
      alertTitle: "success",
      alertData: " This is an success alert"
    },
    five: {
      severity: 'error',
      alertTitle: "error",
      alertData: " This is an error alert",
      variant: "outlined"
    },
    six: {
      severity: 'warning',
      alertTitle: "warning",
      alertData: " This is an warning alert",
      variant: "outlined"
    },
    seven: {
      severity: 'info',
      alertTitle: "info",
      alertData: " This is an info alert",
      variant: "outlined"
    },
    eight: {
      severity: 'success',
      alertTitle: "success",
      alertData: " This is an success alert",
      variant: "outlined"
    },
    nine: {
      severity: 'error',
      alertTitle: "error",
      alertData: " This is an error alert",
      variant: "filled"
    },
    ten: {
      severity: 'warning',
      alertTitle: "warning",
      alertData: " This is an warning alert",
      variant: "filled"
    },
    eleven: {
      severity: 'info',
      alertTitle: "info",
      alertData: " This is an info alert",
      variant: "filled"
    },
    twelve: {
      severity: 'success',
      alertTitle: "success",
      alertData: " This is an success alert",
      variant: "filled"

    },
  }

  return (
    <div className="App">
      <h1>CHIP</h1>
      <Stack direction="row" spacing={2}>
        <Chips
          label="Chips Example"
          color="primary"
          size="large"
          variant="outlined"
          avatar={<Avatar>M</Avatar>}
          onClick={() => alert("chip alert")}
        />
        <Chips label="ChipPrimary" color='primary' size='small' icon={<FaceIcon
        />} />
        <Chips label="Menu" color='primary' size='small' icon={<MenuIcon
        />} />
        <Chips label="outlined" color='secondary' variant='outlined' size='small' avatar={<Avatar>A</Avatar>} />
        <Chips label="click" color='success' onClick={() => alert("clicked")} />
        <Chips label="delete" color='error' onClick={() => alert("clicked")} onDelete={() => alert("delete handler called")} />

      </Stack>
      <hr />
      <h1>CARD</h1>
      <Cards
        component_one={cardData.component_one}
        component_two={cardData.component_two}
        height={cardData.height}
        width={cardData.width}
        image={cardData.image}
        variant_one={cardData.variant_one}
        variant_two={cardData.variant_two}
        typographyContent_one={cardData.typographyContent_one}
        typographyContent_two={cardData.typographyContent_two}
        color={cardData.color}
        primary_one={cardData.primary_one}
        primary_two={cardData.primary_two}
        primary_three={cardData.primary_three}
        primary_four={cardData.primary_four}
        secondary_two={cardData.secondary_two}
        secondary_three={cardData.secondary_three}
        secondary_four={cardData.secondary_four}
        size={cardData.size}
        buttonContent_one={cardData.buttonContent_one}
        buttonContent_two={cardData.buttonContent_two}
      />
      <hr />
      {/* ALERTS */}
      <h1>ALERTS</h1>
      <Stack spacing={2} direction="row">
        <Alerts
          severity={alertData.one.severity}
          alertTitle={alertData.one.alertTitle}
          alertData={alertData.one.alertData}
        />
        <Alerts
          severity={alertData.two.severity}
          alertTitle={alertData.two.alertTitle}
          alertData={alertData.two.alertData}
        />
        <Alerts
          severity={alertData.three.severity}
          alertTitle={alertData.three.alertTitle}
          alertData={alertData.three.alertData}
        />
        <Alerts
          severity={alertData.four.severity}
          alertTitle={alertData.four.alertTitle}
          alertData={alertData.four.alertData}
        />
      </Stack>
      <hr />
      <Stack spacing={2} direction="row">
        <Alerts
          severity={alertData.five.severity}
          alertTitle={alertData.five.alertTitle}
          alertData={alertData.five.alertData}
          variant={alertData.five.variant}
        />
        <Alerts
          severity={alertData.six.severity}
          alertTitle={alertData.six.alertTitle}
          alertData={alertData.six.alertData}
          variant={alertData.six.variant}
        />
        <Alerts
          severity={alertData.seven.severity}
          alertTitle={alertData.seven.alertTitle}
          alertData={alertData.seven.alertData}
          variant={alertData.seven.variant}
        />
        <Alerts
          severity={alertData.eight.severity}
          alertTitle={alertData.eight.alertTitle}
          alertData={alertData.eight.alertData}
          variant={alertData.eight.variant}
        />
      </Stack>
      <hr />
      <Stack spacing={2} direction="row">
        <Alerts
          severity={alertData.nine.severity}
          alertTitle={alertData.nine.alertTitle}
          alertData={alertData.nine.alertData}
          variant={alertData.nine.variant}
          onClose={() => alert("Close Alert")}
        />
        <Alerts
          severity={alertData.ten.severity}
          alertTitle={alertData.ten.alertTitle}
          alertData={alertData.ten.alertData}
          variant={alertData.ten.variant}
        />
        <Alerts
          severity={alertData.eleven.severity}
          alertTitle={alertData.eleven.alertTitle}
          alertData={alertData.eleven.alertData}
          variant={alertData.eleven.variant}
        />
        <Alerts
          severity={alertData.twelve.severity}
          alertTitle={alertData.twelve.alertTitle}
          alertData={alertData.twelve.alertData}
          variant={alertData.twelve.variant}
          action={<Button color='inherit' size='small'>UNDO</Button>}
        />
      </Stack>
      <hr />
      {/* AVATAR */}
      <h1>AVATAR</h1>
      <Stack spacing={1} direction="row">
        <MuiAvatar
          avatarData={avatarData.one.text}
          bgcolor={avatarData.one.bgcolor}
          height={avatarData.one.height}
          width={avatarData.one.width}
        />
        <MuiAvatar
          avatarData={avatarData.one.text}
          bgcolor={avatarData.one.bgcolor}
        />
        <MuiAvatar
          avatarData={avatarData.two.text}
          bgcolor={avatarData.two.bgcolor}
          height={avatarData.two.height}
          width={avatarData.two.width}
          variant={avatarData.two.variant}
        />
        <AvatarGroup max={3}>
          <Avatar>
            <MuiAvatar
              src={avatarData.three.src}
              bgcolor={avatarData.three.bgcolor}
              height={avatarData.three.height}
              width={avatarData.three.width}
            />
          </Avatar>
          <Avatar>
            <MuiAvatar
              src={avatarData.four.src}
              alt={avatarData.four.alt}
              height={avatarData.four.height}
              width={avatarData.four.width}
            />
          </Avatar>
          <Avatar>
            <MuiAvatar
              avatarData={avatarData.one.text}
              bgcolor={avatarData.one.bgcolor}
            />
          </Avatar>
          <Avatar>
            <MuiAvatar
              avatarData={avatarData.two.text}
              bgcolor={avatarData.two.bgcolor}
            />
          </Avatar>
        </AvatarGroup>
      </Stack>
      <hr />
      {/* BUTTON */}
      <h1>BUTTON</h1>
      <Stack spacing={1} direction="row">
        <MuiButton
          buttonData={buttonData.one.buttonData}
          variant={buttonData.one.variant}
          color={buttonData.one.color}
          href={buttonData.one.href}
        />
        <MuiButton
          buttonData={buttonData.two.buttonData}
          variant={buttonData.two.variant}
        />
        <MuiButton
          buttonData={buttonData.three.buttonData}
          variant={buttonData.three.variant}
        />
      </Stack>
      <hr />
      <Stack direction="row" spacing={1}>
        <MuiButton
          buttonData={buttonData.four.buttonData}
          variant={buttonData.four.variant}
          color={buttonData.four.color}
        />
        <MuiButton
          buttonData={buttonData.five.buttonData}
          variant={buttonData.five.variant}
          color={buttonData.five.color}
        />
        <MuiButton
          buttonData={buttonData.six.buttonData}
          variant={buttonData.six.variant}
          color={buttonData.six.color}
        />
        <MuiButton
          buttonData={buttonData.seven.buttonData}
          variant={buttonData.seven.variant}
          color={buttonData.seven.color}
        />
        <MuiButton
          buttonData={buttonData.eight.buttonData}
          variant={buttonData.eight.variant}
          color={buttonData.eight.color}
        />
        <MuiButton
          buttonData={buttonData.nine.buttonData}
          variant={buttonData.nine.variant}
          color={buttonData.nine.color}
        />
      </Stack>
      <hr />
      <Stack direction="row" spacing={2}>
        <MuiButton
          buttonData={buttonData.small.buttonData}
          variant={buttonData.small.variant}
          size={buttonData.small.size}
        />
        <MuiButton
          buttonData={buttonData.medium.buttonData}
          variant={buttonData.medium.variant}
          size={buttonData.medium.size}
        />
        <MuiButton
          buttonData={buttonData.large.buttonData}
          variant={buttonData.large.variant}
          size={buttonData.large.size}
        />
      </Stack>
      <hr />
      <Stack direction="row" spacing={2}>
        <MuiButton
          buttonData={buttonData.startIcon.buttonData}
          variant={buttonData.startIcon.variant}
          startIcon={buttonData.startIcon.startIcon}
        />
        <MuiButton
          buttonData={buttonData.endIcon.buttonData}
          variant={buttonData.endIcon.variant}
          endIcon={buttonData.endIcon.endIcon}
        />

      </Stack>
      <hr />
      <Stack >
        <BtnGroup>
          <MuiButton
            buttonData={buttonData.btnLeft.buttonData}

          />
          <MuiButton
            buttonData={buttonData.btnCenter.buttonData}
          />
          <MuiButton
            buttonData={buttonData.btnRight.buttonData}
          />
        </BtnGroup>
      </Stack>
      <hr />
      <ToggleGrp>
        <Stack direction="row">
          <ToggleBtn
            value={formatIcon.bold.value}
            ariaLabel={formatIcon.bold.ariaLabel}
            formatIcon={formatIcon.bold.formatIcon}
          />
          <ToggleBtn
            value={formatIcon.italic.value}
            ariaLabel={formatIcon.italic.ariaLabel}
            formatIcon={formatIcon.italic.formatIcon}
          />
          <ToggleBtn
            value={formatIcon.underlined.value}
            ariaLabel={formatIcon.underlined.ariaLabel}
            formatIcon={formatIcon.underlined.formatIcon}
          />
        </Stack>
      </ToggleGrp>
    </div>
  );
}

export default App;
