using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Produto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Nome é obrigatório")]
        [StringLength(50, ErrorMessage = "Nome deve ter no máximo 50 caracteres")]
        public  required string Nome { get; set; }

        [Required(ErrorMessage = "Nome é obrigatório")]
        [Range(0, double.MaxValue, ErrorMessage = "O valor deve ser positivo")]
        public required decimal Preco { get; set; }
    }
}
