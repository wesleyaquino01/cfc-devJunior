using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Produto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "nome é Obrigatório")]
        [StringLength(100, ErrorMessage = "Nome deve ter no máximo 100 caracteres")]
        public required string Nome { get; set; }

        [Required(ErrorMessage = "Preço é Obrigatório")]
        public required decimal Preco { get; set; }
    }
}
