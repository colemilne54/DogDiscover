import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
  Grid,
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

var url = 'https://api.api-ninjas.com/v1/dogs?';

// https://portal.thatapicompany.com/pages/dog-api or https://api-ninjas.com/api/dogs

export default function App() {
  const [breeds, getBreeds] = useState(null);
  const [inputs, setInputs] = useState({});
  const { reset } = useForm();

  function BreedCards() {
    if (breeds.length > 0) {
      return (
        <div>
          {breeds.map((breed) => {
            return (
              <Card sx={{ maxWidth: 345, mb: '50px' }}>
                <CardMedia sx={{ height: 250 }} image={breed.image_link} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {breed.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Male Height Range: {breed.min_height_male} -{' '}
                    {breed.max_height_male} inches
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Female Height Range: {breed.min_height_female} -{' '}
                    {breed.max_height_female} inches
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Male Weight Range: {breed.min_weight_male} -{' '}
                    {breed.max_weight_male} lbs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Female Weight Range: {breed.min_weight_female} -{' '}
                    {breed.max_weight_female} lbs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Life Expectancy: {breed.min_life_expectancy} -{' '}
                    {breed.max_life_expectancy} years
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      );
    } else {
      return (
        <Typography variant="h5" component="p">
          No dog breeds found matching criteria
        </Typography>
      );
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleReset = (event) => {
    console.log('test');
    const name = event.target.name;
    console.log(name);
    const defaultValue = event.target.defaultValue;
    console.log(defaultValue);
    setInputs((defaultValues) => ({ ...defaultValues, [name]: defaultValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    var count = 1;
    url = 'https://api.api-ninjas.com/v1/dogs?';

    for (let name in inputs) {
      if (inputs[name] > -1) {
        url = url + name + '=' + inputs[name];
        if (count != Object.keys(inputs).length) {
          url += '&';
        }
        console.log(url);
      }
      count += 1;
    }

    fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'Qrj+hE8c3dEAUqXdL3ISUQ==56KpptbJlFkbqWt3',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getBreeds(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      textAlign="center"
      style={{ minHeight: '100vh' }}
    >
      <Typography variant="h5">Dog Breed Finder</Typography>
      <form onSubmit={handleSubmit}>
        <br />
        <Typography gutterBottom>Barking</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Barking"
          name="barking"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          value={inputs.barking}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Protectiveness</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Protectiveness"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          name="protectiveness"
          value={inputs.protectiveness}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Trainability</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Trainability"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          name="trainability"
          value={inputs.trainability}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Playfulness</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Playfulness"
          name="playfulness"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          value={inputs.playfulness}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Energy</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Energy"
          name="energy"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          value={inputs.energy}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Drooling</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Drooling"
          name="drooling"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          value={inputs.drooling}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Coat Length</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Coat Length"
          name="coat_length"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          value={inputs.coat_length}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Grooming</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Grooming"
          name="grooming"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          value={inputs.grooming}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Shedding</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Shedding"
          name="shedding"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          value={inputs.shedding}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Good With Children</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Good with children"
          name="good_with_children"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          value={inputs.good_with_children}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Good With Other Dogs</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Good with other dogs"
          name="good_with_other_dogs"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          value={inputs.good_with_other_dogs}
          onChange={handleChange}
        />
        <br />
        <Typography gutterBottom>Good With Strangers</Typography>
        <Slider
          style={{ width: '200px' }}
          aria-label="Good with strangers"
          name="good_with_strangers"
          defaultValue={-1}
          step={null}
          marks={marks}
          min={-1}
          max={5}
          value={inputs.good_with_strangers}
          onChange={handleChange}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 15 }}
        >
          Submit
        </Button>
        <br />
        <Button
          onClick={() => reset()}
          variant="contained"
          style={{ marginTop: 15, backgroundColor: 'grey' }}
        >
          Reset
        </Button>
        <br />
      </form>
      <br />
      {breeds !== null && <BreedCards />}
    </Grid>
  );
}
