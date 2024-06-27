import { supabase } from "@/lib/supabase";

//  A.K.A. The DataBeast
const supabaseQuery = async (table, selectQuery, queryBuilder, onEmpty, onSuccess, onError, finallyCallback) => {
  try {
    let query = supabase.from(table).select(selectQuery);
    if (queryBuilder) {
      query = queryBuilder(query);
    }

    const { data, error } = await query;
    
    if (error) {
      console.error(`Error retrieving data: ${error.message || error}`);
      if (onError) onError(error);
      return;
    }

    if (data) {
      if (onSuccess) onSuccess(data);
    }
  } catch (error) {
    console.error(`Unexpected error: ${error.message || error}`);
    if (onError) onError(error);
  } finally {
    if (finallyCallback) finallyCallback();
  }
};

export default supabaseQuery;