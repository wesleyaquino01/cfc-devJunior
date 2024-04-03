using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly Contexto _contexto;


        public ProdutosController(Contexto contexto)
        {
            _contexto = contexto;
        }


        // GET: api/Produtos
        //[HttpGet]
        //public ActionResult<IEnumerable<Produto> ProdutosGet()
        //{
        //    return _contexto.Pessoas.ToList();
        //}
}
    }
}


//[HttpGet]
//public async Task<IActionResult> ListarAsync()
//{
//    var produtos = await _contexto.Produtos.ToListAsync();
//    return Ok(produtos);
//}