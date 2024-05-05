
using AventusSharp.Data;
using AventusSharp.Data.Attributes;

namespace Tutorial.Data
{
    public class Step : Storable<Step>
    {
        public string Name { get; set; } = "";

        [ForeignKey<Todo>]
        public int TodoId { get; set; }

    }
}