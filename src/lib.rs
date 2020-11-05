use std::collections::HashMap;
///store the k/v database
#[derive(Default)]
pub struct KvStore {
    pairs: HashMap<String, String>,
}

impl KvStore {
    pub fn new() -> KvStore {
        KvStore {
            pairs: HashMap::new(),
        }
    }
    ///insert new value pair to k/v database
    pub fn set(&mut self, key: String, value: String) {
        self.pairs.insert(key, value);
    }
    ///get the specified key value
    pub fn get(&self, key: String) -> Option<String> {
        match self.pairs.get(&key) {
            Some(value) => Some(value.to_string()),
            None => None,
        }
    }
    ///remove the specified key's value
    pub fn remove(&mut self, key: String) {
        self.pairs.remove(&key);
    }
}
