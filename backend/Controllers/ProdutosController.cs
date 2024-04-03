using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly Contexto _contexto;


        public ProdutosController(Contexto contexto)
        {
            _contexto = contexto;
        }

        // GET: api/
        [HttpGet]
        public ActionResult<IEnumerable<Produto>> Get()
        {
            return _contexto.Produto.ToList();
        }



        // POST: api/Produto
        [HttpPost]
        public ActionResult<Produto> Post(Produto produto)
        {
            if (_contexto.Produto.Any(p => p.Id == produto.Id))
            {
                return BadRequest("Já existe uma pessoa cadastrada com o ID informado.");
            }

            _contexto.Produto.Add(produto);
            _contexto.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = produto.Id }, produto);
        }
    }
}


//[HttpGet]
//public async Task<IActionResult> ListarAsync()
//{
//    var produtos = await _contexto.Produtos.ToListAsync();
//    return Ok(produtos);
//}