import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, createCategory, deleteCategory } from '../redux/slices/categories';
import {
  Container,
  Button,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Grid // Импортируем Grid для более гибкой верстки
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState(''); // Новое состояние для описания

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAddCategory = () => {
    if (newCategoryName.trim() !== '') {
      // Теперь отправляем и описание вместе с названием
      dispatch(createCategory({ name: newCategoryName, description: newCategoryDescription }));
      setNewCategoryName('');
      setNewCategoryDescription(''); // Сбрасываем описание
    }
  };

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0' }}>Управление категориями</Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            label="Название новой категории"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Описание новой категории"
            value={newCategoryDescription}
            onChange={(e) => setNewCategoryDescription(e.target.value)}
            multiline // Позволяет вводить многострочный текст
            rows={2} // Количество строк по умолчанию
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddCategory}
          >
            Добавить категорию
          </Button>
        </Grid>
      </Grid>

      <List>
        {categories.map((category) => (
          <ListItem key={category._id}>
            <ListItemText
              primary={category.name}
              secondary={category.description} // Отображаем описание, если оно есть
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteCategory(category._id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CategoriesPage;
