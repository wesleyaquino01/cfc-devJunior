using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {
        private readonly Contexto _contexto;

        public PessoasController(Contexto contexto)
        {
            _contexto = contexto;
        }

        // GET: api/Pessoas
        [HttpGet]
        public ActionResult<IEnumerable<Pessoa>> Get()
        {
            return _contexto.Pessoas.ToList();
        }

        // POST: api/Pessoas
        [HttpPost]
        public ActionResult<Pessoa> Post(Pessoa pessoa)
        {
            if (_contexto.Pessoas.Any(p => p.Id == pessoa.Id))
            {
                return BadRequest("Já existe uma pessoa cadastrada com o ID informado.");
            }

            _contexto.Pessoas.Add(pessoa);
            _contexto.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = pessoa.Id }, pessoa);
        }
    }
}
