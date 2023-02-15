import * as React from 'react';

import { useState, useEffect } from 'react';

import './style.css';

import {
  Typography,
  TextField,
  Button,
  Slider,
  FormControl,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

const marks = [
  {
    value: -1,
    label: 'No Pref',
  },
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

// var name = 'golden retriever';
// const url = 'https://api.api-ninjas.com/v1/dogs?name=' + name;

var protectiveness = 5;
var trainability = 5;
const url =
  'https://api.api-ninjas.com/v1/dogs?protectiveness=' +
  protectiveness +
  '&trainability=' +
  trainability;

// https://portal.thatapicompany.com/pages/dog-api or https://api-ninjas.com/api/dogs

export default function App() {
  const [breeds, getBreeds] = useState([]);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(inputs);
  };

  // function handleSubmit(e) {
  //   // Prevent the browser from reloading the page
  //   e.preventDefault();

  //   // Read the form data
  //   const form = e.target;
  //   const formData = new FormData(form);

  //   // You can pass formData as a fetch body directly:
  //   // fetch('/some-api', { method: form.method, body: formData });

  //   // Or you can work with it as a plain object:
  //   const formJson = Object.fromEntries(formData.entries());
  //   console.log(JSON.stringify(formJson));
  // }

  // useEffect(() => {
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       // 'X-Api-Key': 'Qrj+hE8c3dEAUqXdL3ISUQ==56KpptbJlFkbqWt3',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       getBreeds(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  // return (
  //   <div>
  //     {breeds.map((breed) => {
  //       return (
  //         <Card sx={{ maxWidth: 345, mb: '50px' }}>
  //           <CardMedia sx={{ height: 250 }} image={breed.image_link} />
  //           <CardContent>
  //             <Typography gutterBottom variant="h5" component="div">
  //               {breed.name}
  //             </Typography>
  //             <Typography variant="body2" color="text.secondary">
  //               Male Height Range: {breed.min_height_male}-
  //               {breed.max_height_male}
  //             </Typography>
  //             <Typography variant="body2" color="text.secondary">
  //               Female Height Range: {breed.min_height_female}-
  //               {breed.max_height_female}
  //             </Typography>
  //             <Typography variant="body2" color="text.secondary">
  //               Male Weight Range: {breed.min_weight_male}-
  //               {breed.max_weight_male}
  //             </Typography>
  //             <Typography variant="body2" color="text.secondary">
  //               Female Weight Range: {breed.min_weight_female}-
  //               {breed.max_weight_female}
  //             </Typography>
  //             <Typography variant="body2" color="text.secondary">
  //               Life Expectancy: {breed.min_life_expectancy}-
  //               {breed.max_life_expectancy}
  //             </Typography>
  //           </CardContent>
  //         </Card>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div className="App">
      <Typography variant="h5">Dog Breed Finder</Typography>
      <FormControl onSubmit={handleSubmit}>
        <TextField
          style={{ width: '200px', margin: '5px' }}
          variant="outlined"
          label="Minimum Height"
          name="min_height"
          type="text"
          value={inputs.min_height}
          onChange={handleChange}
        />
        {/* <br />
        <TextField
          style={{ width: '200px', margin: '5px' }}
          type="text"
          label="Maximum Height"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: '200px', margin: '5px' }}
          type="text"
          label="Minimum Weight"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: '200px', margin: '5px' }}
          type="text"
          label="Maximum Weight"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: '200px', margin: '5px' }}
          type="text"
          label="Minimum Life Expectancy"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: '200px', margin: '5px' }}
          type="number"
          label="Maximum Life Expectancy"
          variant="outlined"
        />
        <br />
        <Typography gutterBottom>Shedding</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Temperature"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
        />
        <br />
        <Typography gutterBottom>Barking</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Temperature"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
        />
        <br />
        <Typography gutterBottom>Energy</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Temperature"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
        />
        <br />
        <Typography gutterBottom>Protectiveness</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Temperature"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
        />
        <br />
        <Typography gutterBottom>Trainability</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Temperature"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
        />
        <br /> */}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </FormControl>
    </div>
  );
}
