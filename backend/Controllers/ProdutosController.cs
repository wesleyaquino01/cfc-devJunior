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


        //Get: api/produto/id
        [HttpGet("{id}")]
        public ActionResult<Produto> GetProdutoPorId(int id)
        {
            var produto = _contexto.Produto.Find(id);

            if (produto == null)
            {
                return NotFound();
            }

            return Ok(produto);
        }

        // GET: api/Produto
        [HttpGet]
        public ActionResult<IEnumerable<Produto>> Get()
        {
            return _contexto.Produto.ToList();
        }


        //Delete: api/Produto/id
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var produto = _contexto.Produto.Find(id);

            if (produto == null)
            {
                return NotFound();
            }

            _contexto.Produto.Remove(produto);
            _contexto.SaveChanges();

            return NoContent();
        }
    }
}