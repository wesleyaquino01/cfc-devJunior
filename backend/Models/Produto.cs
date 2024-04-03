using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Produto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Nome é obrigatório")]
        [StringLength(100, ErrorMessage = "Nome deve ter no máximo 100 caracteres")]
        public  string Nome { get; set; }

        [Required(ErrorMessage = "Preço é obrigatório")]
        public  decimal Preco { get; set; }
    }
}
