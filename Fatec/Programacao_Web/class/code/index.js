require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');

const app = express();

app.use(express.json());

app.use(express.static('public'));

connectDB();

app.post('/usuarios', async (req, res) => {
  try {
    const novoUsuario = await User.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await User.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.get('/usuarios/:id', async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id);
    if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.put('/usuarios/:id', async (req, res) => {
  try {
    const usuarioAtualizado = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!usuarioAtualizado) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.delete('/usuarios/:id', async (req, res) => {
  try {
    const usuarioDeletado = await User.findByIdAndDelete(req.params.id);
    if (!usuarioDeletado) return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    res.status(200).json({ mensagem: 'Usuário removido com sucesso!' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));