using AventusSharp.Routes;
using AventusSharp.Routes.Attributes;
using AventusSharp.Tools;
using AventusSharp.Tools.Attributes;
using Core.Routes;
using Tutorial.Data;
using Tutorial.Logic.DM;
using Path = AventusSharp.Routes.Attributes.Path;

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
