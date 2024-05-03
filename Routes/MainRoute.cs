using AventusSharp.Routes;
using AventusSharp.Tools.Attributes;
using Core.Routes;

namespace Tutorial.Routes
{
    public class MainRoute : Route
    {
        [NoTypescript]
        public Component Index()
        {
            return new Component("Main");
        }
    }
}
