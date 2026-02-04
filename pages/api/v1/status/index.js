function status(request, response) {
  response.status(200).json({ chave: "using curl" });
}

export default status;
