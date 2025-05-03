import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const InfoBox = ({ info }) => {
    const INIT_URL = "https://images.unsplash.com/photo-1617141870851-3e8c8c172595?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww";
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1726721211928-398be54193be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwc2Vhc29ufGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox"><br /><br />
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}> 
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}  {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>Temperature: {info.temp}°C</div>
                            <div>Humidity: {info.humidity}%</div>
                            <div>Min Temp: {info.tempMin}°C</div>
                            <div>Max Temp: {info.tempMax}°C</div>
                            <div>The weather can be described as <i>{info.weather}</i>. Feels Like: {info.feelsLikes}°C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default InfoBox;
