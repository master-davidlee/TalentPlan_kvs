use clap::{App, Arg, SubCommand};

use std::process::exit;

fn main() {
    let matches = App::new("A Simple k/v store")
        .version(env!("CARGO_PKG_VERSION"))
        .author(env!("CARGO_PKG_AUTHORS"))
        .about(env!("CARGO_PKG_DESCRIPTION"))
        .subcommand(
            SubCommand::with_name("set")
                .about("set the key/value pairs")
                .arg(Arg::with_name("key").required(true))
                .arg(Arg::with_name("value").required(true)),
        )
        .subcommand(
            SubCommand::with_name("get")
                .about("get the value match the key")
                .arg(Arg::with_name("key").required(true)),
        )
        .subcommand(
            SubCommand::with_name("rm")
                .about("remove the value match the key")
                .arg(Arg::with_name("key").required(true)),
        )
        .get_matches();

    match matches.subcommand() {
        ("set", Some(_pars)) => {
            eprint!("unimplemented");
            exit(1);
        }
        ("get", Some(_key)) => {
            eprint!("unimplemented");
            exit(1);
        }
        ("rm", Some(_key)) => {
            eprint!("unimplemented");
            exit(1);
        }
        _ => panic!("no such subcommand"),
    }
}
