using AventusSharp.Data;
using AventusSharp.Data.Attributes;

namespace Tutorial.Data
{
    public class Todo : Storable<Todo>
    {
        // [Size(3, 255, "Le nom doit être compris entre 3 et 255 caratères")]
        public string Name { get; set; } = "";

        public bool Done { get; set; } = false;

        [ReverseLink]
        public List<Step> Steps { get; set; } = new List<Step>();
    }
}