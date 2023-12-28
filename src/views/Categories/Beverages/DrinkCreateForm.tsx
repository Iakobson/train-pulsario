// @/views/Categories/Beverages/DrinkCreateForm
'use client';
import Link from 'next/link';
import { useFormState } from 'react-dom';
// field elements for the form
import Stack from '@mui/material/Stack';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';

// put information to the database
import { createBeverage } from '@/services/data-actions';

interface DrinkCreateFormProps {
  countries: string[];
  categories: string[];
}

export default function DrinkCreateForm({ countries, categories }:DrinkCreateFormProps) {
  //
  
  return (
    <form action={createBeverage}>
	<Stack sx={{ width: 300 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
	  {/* Поле форми для вибору країни виробництва напою */}
	  <InputLabel htmlFor="country">Виберіть країну виробництва</InputLabel>
      <Select id="country" name="country" defaultValue="">
        <MenuItem value="" disabled>
          перелік країн
        </MenuItem>
        {countries.map( (country, index) => (
          <MenuItem key={index} value={country}>
            {country}
          </MenuItem>
        ) )}
      </Select>
	  		
      {/* Поле форми для вибору категорії напою */}
	  <InputLabel htmlFor="category">Виберіть категорію напою</InputLabel>
      <Select id="category" name="category" defaultValue="">
        <MenuItem value="" disabled>
          перелік категорій
        </MenuItem>
        {categories.map((category, index) => (
          <MenuItem key={index} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
				
      {/* Поле форми для введення назви напою */}
	  <TextField type="text"
        id="title" name="title"
        label="Введіть найменування напою"
        placeholder="Назва місткістьL"
      />

	  {/* Поле форми для введення ціни Auchan */}
	  <TextField type="number" step="1"
        id="priceAuchan" name="priceAuchan"
        label="Введіть ціну магазину Auchan"
        placeholder="Ціна Ашан в ГРН"
      />
	
	  {/* Поле форми для введення ціни Novus */}  
      <TextField type="number" step="1"
        id="priceNovus" name="priceNovus"
        label="Введіть ціну магазину Novus"
        placeholder="Ціна Новус в ГРН"
      />	  
	  
	  {/* Поле форми для введення ціни Silpo */}
	  <TextField type="number" step="1"
        id="priceSilpo" name="priceSilpo"
        label="Введіть ціну магазину Silpo"
        placeholder="Ціна Сільпо в ГРН"
      />
	  
	  {/* Поле форми для введення ціни ATB */}
	  <TextField type="number" step="1"
        id="priceATB" name="priceATB"
        label="Введіть ціну магазину ATB"
        placeholder="Ціна АТБ в ГРН"
      />
	  

      {/* Поле форми для введення опису напою */}
	  <TextField type="text"
        id="description" name="description"
        label="Введіть короткий опис напою"
        placeholder="Напишіть щось про цей напій"
      />

      <Link href="/categories/beverages">
	    <Button>Cancel</Button>
	  </Link>
      <Button type="submit">Create Drink</Button>
	  </Stack>
    </form>
  );
}
